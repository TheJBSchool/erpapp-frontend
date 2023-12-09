import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { bgcolor1, bgcolor2 } from "../Home/custom.js";
import {AdminContext} from "../Admin/AdminDashboard";

const AdminLeftPanel = ({adminData}) => {
    const navigate = useNavigate();
    const {selectedItem, setSelectedItem } = useContext(AdminContext)
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
            <h2 className="font-bold">{adminData.name}</h2>
            <h2 className="font-bold">Admin Id : {adminData.ID}</h2>

            <div className="Details flex flex-col mt-6 w-full">
                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'dashboard' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('dashboard')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/dashboard-interface.png')} />
                    <h2 className="font-bold ">Dashboard</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'myProfile' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('myProfile')}>
                    <img className="h-7 w-7 mr-5" alt="profile-interface" src={require('../../img/profile-interface-1.png')} />
                    <h2 className="font-bold ">My Profile</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'attendace' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('attendace')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/attendence-icon.png')} />
                    <h2 className="font-bold ">Attendance</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'result' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('result')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/result-icon.png')} />
                    <h2 className="font-bold ">Result</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'fees' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('fees')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/fees-icon.png')} />
                    <h2 className="font-bold ">Fees</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'payroll' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('payroll')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/payroll.png')} />
                    <h2 className="font-bold ">Payroll</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'syllabus' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('syllabus')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/Syllabusicon.png')} />
                    <h2 className="font-bold ">Syllabus</h2>
                </div>

                <div className={`flex justify-items-start mb-5 rounded-md hover:bg-red-200 hover:cursor-pointer ${selectedItem === 'lostFound' ? "bg-red-200" : ""
                    }`} onClick={() => setSelectedItem('lostFound')}>
                    <img className="h-7 w-7 mr-5" alt="Fees icon" src={require('../../img/lost-found.png')} />
                    <h2 className="font-bold ">Lost and Found</h2>
                </div>
            </div>
        </div>
    )
}

export default AdminLeftPanel