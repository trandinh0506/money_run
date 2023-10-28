import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import SERVERHOST from "../../serverhost";
import Style from "./UserSettings.module.css";
import Loading from "../../Img/Loading.gif";
import Notification from "../../Notification";
import Edit from "../../Img/edit.png";
const UserSettings = () => {
    const [categories, setCategories] = useState([]);
    const [pendding, setPendding] = useState(true);
    const [message, setMessage] = useState("");
    const [Button, setButton] = useState("Thêm vào");
    const [id, setId] = useState(0);
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const token = document.cookie.replace("token=", "");
    const headers = {
        "content-type": "application/json",
        Authorization: token,
    };
    useEffect(() => {
        axios
            .get(`${SERVERHOST}/users/categories`, { headers })
            .then((res) => {
                if (res.data.success) {
                    setCategories(res.data.categories);
                } else {
                    if (res.data.message === "Invalid token!") {
                        navigate("/users/login");
                    } else {
                        setMessage(res.data.message);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                setMessage("Lỗi máy chủ!");
            })
            .finally(() => {
                setPendding(false);
            });
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("");
        }, 2500);
        return () => {
            clearTimeout(timer);
        };
    }, [message]);
    const handleAdd = () => {
        if (inputRef.current.value) {
            if (Button === "Thêm vào") {
                setCategories([
                    ...categories,
                    {
                        category_name: inputRef.current.value,
                        category_id: categories.length + 1,
                        user_id: categories[0].user_id,
                        category_color: "#000000",
                    },
                ]);
            } else {
                categories.forEach((category) => {
                    if (category.category_id === id) {
                        category.category_name = inputRef.current.value;
                        inputRef.current.value = "";
                    }
                });
            }
            setButton("Thêm vào");
        } else {
            setMessage("Tên mục không được để trống!");
        }
    };
    const handleEdit = (id) => {
        inputRef.current.value = categories[id - 1].category_name;
        inputRef.current.focus();
        setButton("Okay");
    };
    const handleSave = () => {
        setPendding(true);
        console.log(categories);
        axios
            .post(`${SERVERHOST}/users/update`, { categories }, { headers })
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.log(err);
                setMessage("Lỗi máy chủ!");
            })
            .finally(() => {
                setPendding(false);
            });
    };
    return (
        <div className={Style.Wapper_all}>
            <div className={Style.Wapper}>
                {message && <Notification message={message} />}
                {!pendding && (
                    <div>
                        <Link className={Style.back_to_dashboard} to="/users">
                            Nhập chi tiêu
                        </Link>
                        <Link
                            className={Style.view_details}
                            to="/spendings/viewchart"
                        >
                            Xem chi tiết
                        </Link>
                        <div>
                            <label htmlFor="add">Tên mục</label>
                            <br />
                            <input
                                id="add"
                                type="text"
                                className={Style.add_input}
                                ref={inputRef}
                                required
                            />
                            <button
                                className={Style.add_btn}
                                onClick={handleAdd}
                            >
                                {Button}
                            </button>
                        </div>
                        {categories.map((category) => {
                            return (
                                <div
                                    className={Style.category_table}
                                    key={category.category_id}
                                >
                                    <div>{category.category_name}</div>
                                    <input
                                        className="color_input"
                                        type="color"
                                        name=""
                                        value={category.category_color}
                                        onChange={(e) => {
                                            const updatedCategories =
                                                categories.map((cat) => {
                                                    if (
                                                        cat.category_id ===
                                                        category.category_id
                                                    ) {
                                                        return {
                                                            ...cat,
                                                            category_color:
                                                                e.target.value,
                                                        };
                                                    }
                                                    return cat;
                                                });
                                            setCategories(updatedCategories);
                                        }}
                                    />
                                    <div
                                        onClick={() => {
                                            handleEdit(category.category_id);
                                            setId(category.category_id);
                                        }}
                                    >
                                        <img src={Edit} alt="" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            {pendding && (
                <div className={Style.layer}>
                    <div className={Style.message_res}>
                        <img src={Loading} alt="" />
                    </div>
                </div>
            )}
            {!pendding && (
                <div className={Style.save}>
                    <button
                        onClick={handleSave}
                        style={{ fontSize: "18px", borderRadius: "5px" }}
                    >
                        Lưu lại!
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserSettings;
