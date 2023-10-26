import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import ErrorPage from "./ErrorPage";
import AdminLogin from "./Admin/AdminLogin";
import Admin from "./Admin";
import UserLogin from "./Users/UserLogin";
import UserRegister from "./Users/UserRegister";
import UserDashBoard from "./Users/UserDashBoard";
import UserSettings from "./Users/UserSettings";
import ViewChart from "./Spendings/ViewChart";
import Cache from "./Cache";
import { useEffect } from "react";
import axios from "axios";
import SERVERHOST from "./serverhost";
function App() {
    useEffect(()=>{
        axios.get(`${SERVERHOST}/wakeup`);
    },[])
    return (
        <div className="App">
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/Cache" element={<Cache />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<Admin />} />
                    <Route
                        path="/admin"
                        element={<Navigate to="/admin/login" />}
                    />
                    <Route path="/users/register" element={<UserRegister />} />
                    <Route path="/users/login" element={< UserLogin />}  />
                    <Route path="/users/dashboard" element={<UserDashBoard />} />
                    <Route path="/users/settings" element={<UserSettings />} />
                    <Route path="/users" element={<Navigate to="/users/dashboard" />} />

                    <Route path="/spendings/viewchart" element={<ViewChart />} />

                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
