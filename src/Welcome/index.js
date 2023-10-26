import React from "react";
import { Link } from "react-router-dom";
import Style from "./Welcome.module.css";
const Welcome = () => {
    return (
        <div className={Style.Wapper}>
            <Link to="/users/" id={Style.startBtn}></Link>
        </div>
    );
};

export default Welcome;
