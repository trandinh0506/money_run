import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./UserRegister.module.css";
import axios from "axios";
import Loading from "../../Img/Loading.gif";
import Notification from "../../Notification";
import SERVERHOST from "../../serverhost";
const UserRegister = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [pendding, setPendding] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword)
            alert("mật khẩu không khớp với xác nhận mật khẩu");
        else {
            setPendding(true);
            axios
                .post(`${SERVERHOST}/users/register`, {
                    username,
                    password,
                    email,
                })
                .then((response) => {
                    if (response.data.success) {
                        navigate("/users");
                    } else {
                        setMessage(response.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setMessage("Lỗi máy chủ!");
                })
                .finally(() => {
                    setPendding(false);
                });
        }
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
            <div>
                <h2 className={Style.register}>Đăng Ký</h2>
                <div className={Style.sideLogin}></div>
                <form className={Style.loginForm} onSubmit={handleSubmit}>
                    <div className={Style.usernameWapper}>
                        <label htmlFor="username">Tên tài khoản</label> <br />
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
                    <div className={Style.usernameWapper}>
                        <label htmlFor="email">Email</label> <br />
                        <input
                            className={Style.input}
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
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
                            type={showPassword ? "text" : "password"}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">
                            Xác nhận mật khẩu
                        </label>{" "}
                        <br />
                        <input
                            className={Style.input}
                            id="confirmpassword"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            type={showPassword ? "text" : "password"}
                            required
                        />
                        <br />
                        <label htmlFor="show" style={{ fontSize: 12 }}>
                            hiển thị mật khẩu
                        </label>
                        <input
                            type="checkbox"
                            id="show"
                            checked={showPassword}
                            onChange={(e) => {
                                setShowPassword(e.target.checked);
                            }}
                        />
                    </div>
                    <div className={Style.btnWapper}>
                        <button type="submit">Đăng ký</button>
                    </div>
                    <span>
                        Đã có tài khoản? ấn vào{" "}
                        <Link to="/users/login"> đây</Link>
                    </span>
                </form>
            </div>
            {pendding && (
                <div className={Style.layer}>
                    <div className={Style.message_res}>
                        <img src={Loading} alt="" />
                    </div>
                </div>
            )}
            {message && <Notification message={message} />}
        </div>
    );
};

export default UserRegister;
