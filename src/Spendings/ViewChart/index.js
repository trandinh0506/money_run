import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SERVERHOST from "../../serverhost";
import Style from "./ViewChart.module.css";
import Loading from "../../Img/Loading.gif";
import { useRef } from "react";
const ViewChart = () => {
    const navigate = useNavigate();
    const canvas = useRef(null);
    const token = document.cookie.replace("token=", "");
    const [currentData, setCurrentData] = useState([]);
    const [data, setData] = useState([]);
    const [yearOrMonth, setYearOrMonth] = useState("0");
    const [options, setOptions] = useState([]);
    const [choose, setChoose] = useState("00");
    const [pendding, setPendding] = useState(true);
    useEffect(() => {
        if (!token) navigate("/users/login");
    }, [navigate, token]);
    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: token,
        };
        axios
            .get(`${SERVERHOST}/users/spendings/get`, { headers })
            .then((response) => {
                console.log(response.data);
                setPendding(false);
                setData(response.data.spendings);
            });
    }, [token]);

    const renderChart = () => {
        const canvasElement = canvas.current;
        if (canvasElement && data.length > 0) {
            const ctx = canvas.current.getContext("2d");
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            const typeTotalMoney = {};
            const canvasWidth = canvasElement.offsetWidth;
            const canvasHeight = canvasElement.offsetHeight;

            // Calculate the total money for all types and store it in typeTotalMoney
            currentData.forEach((item) => {
                if (!typeTotalMoney[item.category_id]) {
                    typeTotalMoney[item.category_id] = 0;
                }
                typeTotalMoney[item.category_id] += item.amount;
            });

            // Calculate the totalMoney by summing up all the typeTotalMoney values
            const totalMoney = Object.values(typeTotalMoney).reduce(
                (total, value) => total + value,
                0
            );
            // Get unique 'type' values from the data
            const uniqueTypes = [
                ...new Set(currentData.map((item) => item.category_id)),
            ];

            const typeLabels = {};
            currentData.forEach((item) => {
                if (!typeLabels[item.category_id]) {
                    typeLabels[item.category_id] = item.category_name;
                }
            });

            const colors = [
                ...new Set(currentData.map((item) => item.category_color)),
            ];

            const centerX = canvasWidth / 2;
            const centerY = canvasHeight / 2 - canvasHeight * 0.15;

            // Initialize the starting angle for the first segment at 12 o'clock (270 degrees)
            let startAngle = -Math.PI / 2;

            // Initialize variables to keep track of the text position
            const positionX = [250, 650];
            // Loop through unique 'type' values
            for (let i = 0; i < uniqueTypes.length; i++) {
                const type = uniqueTypes[i];
                const totalMoneyForType = typeTotalMoney[type];
                const percentage = (totalMoneyForType / totalMoney) * 100;

                // Only display if the percentage is greater than 0%
                if (percentage > 0) {
                    // Define the end angle here
                    const endAngle =
                        startAngle + Math.PI * 2 * (percentage / 100);

                    // Draw the pie segment
                    const radius = canvasElement.width / 4;

                    ctx.fillStyle = colors[i];
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
                    ctx.fill();
                    // Update the starting angle for the next segment
                    startAngle = endAngle;
                    // Display the percentage and explanation below the chart
                    const textX = positionX[i % 2];
                    const textY =
                        i >= 0 && i < 2 ? 520 : i >= 2 && i < 4 ? 570 : 620;
                    ctx.font = "15px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText(
                        `${typeLabels[type]} - ${percentage.toFixed(
                            2
                        )}% - ${totalMoneyForType.toLocaleString()}VND`,
                        textX,
                        textY
                    );
                }
            }
            ctx.font = "15px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "green";
            ctx.fillText(`Tổng - ${totalMoney.toLocaleString()}VND`, 650, 620);
        }
    };
    useEffect(() => {
        const canvasElement = canvas.current;

        if (canvasElement) {
            const rect = canvasElement.getBoundingClientRect();
            canvasElement.width = rect.width;
            canvasElement.height = rect.height;
        }

        renderChart();
    }, [currentData]);
    useEffect(() => {
        if (yearOrMonth === "0") {
            setOptions([...new Set(data.map((item) => item.date.slice(0, 7)))]);
            setChoose("00");
        } else {
            setOptions([...new Set(data.map((item) => item.date.slice(0, 4)))]);
            setChoose("10");
        }
        console.log(options);
    }, [yearOrMonth, data]);
    useEffect(() => {
        const year = parseInt(choose.slice(0, 1)); //choose `month?year (with month = 0, year = 1) which year or month`
        const whichYearOrMonth = parseInt(choose.slice(1, 2));
        console.log(year, whichYearOrMonth);
        if (year) {
            setCurrentData(
                data.filter(
                    (item) =>
                        item.date.slice(0, 4) === options[whichYearOrMonth]
                )
            );
        } else {
            setCurrentData(
                data.filter(
                    (item) =>
                        item.date.slice(0, 7) === options[whichYearOrMonth]
                )
            );
        }
    }, [choose, options]);
    return (
        <div className={Style.Wapper}>
            {!pendding && data[0] && (
                <div>
                    <Link className={Style.back_to_dashboard} to="/users">
                        Nhập chi tiêu
                    </Link>
                    <div className={Style.select_container}>
                        <select
                            className={Style.select_month_year}
                            value={yearOrMonth}
                            onChange={(e) => {
                                setYearOrMonth(e.target.value);
                            }}
                        >
                            {" "}
                            Theo
                            <option value="0">Tháng</option>
                            <option value="1">Năm</option>
                        </select>
                        <select
                            className={Style.select_choose}
                            value={choose}
                            onChange={(e) => {
                                setChoose(e.target.value);
                            }}
                        >
                            {options.map((Option, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={`${yearOrMonth}${index}`}
                                    >
                                        {Option}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={Style.canvas_container}>
                        <canvas
                            ref={canvas}
                            className={Style.canvas}
                            id="canvas"
                        ></canvas>
                    </div>
                    <div className={Style.show_detail_wapper}>
                        <ul className={Style.show_detail}>
                            {currentData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className={Style.date}>
                                            Ngày{" "}
                                            {item.date
                                                .split("-")
                                                .reverse()
                                                .join("/")}
                                        </span>{" "}
                                        <span className={Style.description}>
                                            {item.description}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
            {!data[0] && (
                <div>
                    <div className={Style.nothing}>Không có gì ở đây cả</div>
                    <div>
                        <Link
                            className={Style.back_to_dashboard}
                            style={{
                                width: "280px",
                                position: "fixed",
                                top: "35%",
                                fontSize: "25px",
                                left: "40%",
                            }}
                            to="/users/"
                        >
                            Quay lại trang nhập chi tiêu
                        </Link>
                    </div>
                </div>
            )}
            {pendding && (
                <div className={Style.layer}>
                    <div className={Style.message_res}>
                        <img src={Loading} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewChart;
