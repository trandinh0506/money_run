import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import SERVERHOST from "../../serverhost";
import Style from "./UserDashBoard.module.css";
import Loading from "../../Img/Loading.gif";
import Notification from "../../Notification";
import Quote from "../../quotes";
const UserDashBoard = () => {
    const navigate = useNavigate();
    const [pendding, setPendding] = useState(true);
    const [message, setMessage] = useState("");
    const [categories, setCategories] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // get current date as yyyy-mm-dd
    const [category, setCategory] = useState(0);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = document.cookie.replace("token=", "");
        const headers = {
            "content-type": "application/json",
            Authorization: token,
        };
        const data = {
            description,
            category,
            amount,
            date,
        };
        console.log(data);
        setPendding(true);
        axios
            .post(
                `${SERVERHOST}/users/add`,
                { description, category_id: category, amount, date },
                { headers }
            )
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    setMessage("Chi tiêu đã được lưu lại!");
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                setMessage("Lỗi máy chủ!");
            })
            .finally(() => {
                setPendding(false);
            });
    };
    useEffect(() => {
        const token = document.cookie.replace("token=", "");

        if (token) {
            const headers = {
                "content-type": "application/json",
                Authorization: token,
            };

            axios
                .get(`${SERVERHOST}/users/categories`, { headers })
                .then((res) => {
                    if (res.data.success) {
                        setCategory(res.data.categories[0].category_id);
                        setCategories(res.data.categories);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setMessage("Lỗi máy chủ!");
                })
                .finally(() => {
                    setPendding(false);
                });
        } else {
            navigate("/users/login");
        }
    }, [navigate]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("");
        }, 2500);

        return () => clearTimeout(timer);
    }, [message]);
    return (
        <div>
            {!pendding && (
                <div className={Style.Wapper}>
                    <Link
                        className={Style.view_details}
                        to="/spendings/viewchart"
                    >
                        Xem chi tiết
                    </Link>
                    <h2 className={Style.heading2}>Spending management</h2>
                    <form className={Style.form} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="date">Ngày</label> <br />
                            <input
                                className={Style.input}
                                required
                                autoComplete=""
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="category">Loại</label> <br />
                            <select
                                className={Style.select}
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                            >
                                {categories.map((category) => {
                                    return (
                                        <option
                                            value={category.category_id}
                                            key={category.category_id}
                                        >
                                            {category.category_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="description">Mô tả</label> <br />
                            <input
                                className={Style.input}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                required
                                autoComplete=""
                                type="text"
                                id="description"
                            />
                        </div>
                        <div>
                            <label htmlFor="amount">Tiền chi</label> <br />
                            <input
                                className={Style.input}
                                required
                                autoComplete=""
                                type="number"
                                id="amount"
                                value={amount ? amount : undefined}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <button type="submit">Lưu lại!</button>
                        </div>
                    </form>
                    <div className={Style.quotes}>
                        <span>QUOTES</span>
                        {Quote.quotes.map((quote, i) => (
                            <div className={Style.quoteDiv} key={i}>
                                {quote}
                            </div>
                        ))}
                        <span className={Style.author}>
                            {Quote.author ? "--" : ""}
                            {Quote.author}
                            {Quote.author ? "--" : ""}
                        </span>
                    </div>
                    <div>
                        <Link className={Style.settings} to="/users/settings">
                            Cài đặt
                        </Link>
                    </div>
                    {message && <Notification message={message} />}
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
export default UserDashBoard;
