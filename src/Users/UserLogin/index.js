import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Notification from "../../Notification";
import Style from "./UserLogin.module.css";
import SERVERHOST from "../../serverhost";
import Loading from "../../Img/Loading.gif";
const UserLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pendding, setPendding] = useState(false);
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const headers = {
            "content-type": "application/json",
        };
        setPendding(true);
        axios
            .post(
                `${SERVERHOST}/users/login`,
                { username, password },
                { headers }
            )
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data.token);
                    document.cookie =
                        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = `token=${res.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                    navigate("/users/dashboard");
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
        const timer = setTimeout(() => {
            setMessage("");
        }, 2500);
        return () => {
            clearTimeout(timer);
        };
    }, [message]);
    return (
        <div className={Style.Wapper}>
            {message && <Notification message={message} />}
            {!pendding && (
                <div>
                    <h2 className={Style.welcomeBack}>Đăng nhập</h2>
                    <div className={Style.sideLogin}></div>
                    <form className={Style.loginForm} onSubmit={handleSubmit}>
                        <div className={Style.usernameWapper}>
                            <label htmlFor="username">Tài khoản</label> <br />
                            <input
                                className={Style.input}
                                id="username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Mật khẩu</label> <br />
                            <input
                                className={Style.input}
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type={checked ? "text" : "password"}
                                required
                            />
                            <br />
                            <label htmlFor="show" style={{ fontSize: 12 }}>
                                hiển thị mật khẩu
                            </label>
                            <input
                                type="checkbox"
                                id="show"
                                checked={checked}
                                onChange={(e) => {
                                    setChecked(e.target.checked);
                                }}
                            />
                        </div>
                        <div className={Style.btnWapper}>
                            <button type="submit">Đăng nhập</button>
                        </div>
                        <span>
                            Quên mật khẩu? ấn vào{" "}
                            <Link to="/forgot-password">đây</Link>
                        </span>
                        <div className={Style.btnWapper}>
                            <Link
                                to="/users/register"
                                className={Style.createAccount}
                            >
                                Tạo tài khoản
                            </Link>
                            <br />
                            <span>nếu bạn chưa có một tài khoản</span>
                        </div>
                    </form>
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

export default UserLogin;
