import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./AdminLogin.module.css";
const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "admin" && password === "admin") {
            navigate("/admin/dashboard");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className={Style.loginForm}>
            <h2 className={Style.heading2}>Admin Login</h2>
            <form onSubmit={handleSubmit} className={Style.inputForm}>
                <div className={Style.inputContainer}>
                    <label className={Style.label}>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className={Style.inputField}
                        />
                    </label>
                </div>
                <div className={Style.inputContainer}>
                    <label className={Style.label}>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={Style.inputField}
                        />
                    </label>
                </div>
                <button type="submit" className={Style.submitButton}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
