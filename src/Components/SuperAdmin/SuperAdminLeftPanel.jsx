import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { bgcolor1, bgcolor2 } from "../Home/custom.js";
import {SuperAdminContext} from "../SuperAdmin/SuperAdminDashboard.jsx";

const SuperAdminLeftPanel = ({superAdminData}) => {
    const navigate = useNavigate();
    const {selectedItem, setSelectedItem } = useContext(SuperAdminContext)
    return (
        <div style={bgcolor2} className="leftSidePanel border-2  border-red-300 rounded-lg flex flex-col p-3 w-2/12 h-full items-center">
            <div className="flex justify-center  hover:cursor-pointer" onClick={() => {
                localStorage.removeItem("token");
                navigate('/');
            }}>
                <img className="h-7 w-7 mr-1" src={require('../../img/logout.png')} alt="profile" />
                <p className="font-bold hover:text-lg">Log Out</p>
            </div>
            <div className="w-7/12 ">
                <img className="admin-profile" alt="Admin profile" src={require('../../img/admin_profile.png')} />
            </div>
            <h2 className="font-bold">{superAdminData.name}</h2>
            <h2 className="font-bold">{superAdminData.ID}</h2>

            <div className="Details flex flex-col mt-6 w-full">
                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'dashboard' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('dashboard')}>
                    <img className="h-7 w-7 mr-5" alt="dashboard" src={require('../../img/dashboard-interface.png')} />
                    <h2 className="font-bold ">Dashboard</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'manageAdmins' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('manageAdmins')}>
                    <img className="h-7 w-7 mr-5" alt="manageAdmins" src={require('../../img/attendence-icon.png')} />
                    <h2 className="font-bold ">Manage Admins</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'requestValidation' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('requestValidation')}>
                    <img className="h-7 w-7 mr-5" alt="requestValidation" src={require('../../img/result-icon.png')} />
                    <h2 className="font-bold ">Request Validation</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'manageSchool' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('manageSchool')}>
                    <img className="h-7 w-7 mr-5" alt="manageSchool" src={require('../../img/result-icon.png')} />
                    <h2 className="font-bold ">Manage School Details</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'notification' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('notification')}>
                    <img className="h-7 w-7 mr-5" alt="notification" src={require('../../img/Notification-interface-1.png')} />
                    <h2 className="font-bold ">Notifications</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'communication' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('communication')}>
                    <img className="h-7 w-7 mr-5" alt="communication" src={require('../../img/comments.png')} />
                    <h2 className="font-bold ">Communication</h2>
                </div>
            </div>
        </div>
    )
}

export default SuperAdminLeftPanel