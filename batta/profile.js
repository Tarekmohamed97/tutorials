import React from 'react';
import Unknown from '../unknown.jpg';
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    state = {
        data : {
            fullName : "Ehab Tawfik Ahmed",
            email : "ihab@gmail.com",
            password : "36547897",
            school : "el haram",
            address : "imbaba",
            appointment:"",
            centerID : "VIP",
            groupId : "9",
            attendance : 2,
            absence: "0",
            fatherPhone: "",
            fatherJop: "",
            time: "",
            disabled:"",
        },
        disabled: false,
        id: "",
        deleted: false,
        urlimage: null,
        groups: [],
        centers: [],
        studentCenter: "",
        studentGroup: "",
        newGroup: null,
        newCenter: null,
        time: "",
        center: ""
    };
    render(){
    return(
        <div>
            <div className = "nav-bar">
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
            </div>
            <div className = "profile-information">
                <div className = "image-container">
                    <img src = {Unknown} alt = "unknown" className = "unknown-image"/>
                    <button  type="button" className="btn-download">Download</button>
                </div>
                <div className = "information-block">
                    <p id = "name" className = "information">Name: {this.state.data.fullName}</p>
                    <p id = "email" className = "information">Email: {this.state.data.email}</p>
                    <p id = "password" className = "information">password: {this.state.data.password}</p>
                    <p id = "appointment" className = "information">appointment: {this.state.data.appointment}</p>
                    <p id = "center" className = "information">Center: {this.state.data.centerID}</p>
                    <p id = "group" className = "information">Group: {this.state.data.groupId}</p>
                    <Link to = "/profile/update" type="button" className="btn-update">Update</Link>
                </div>
            </div>
            <div className = "buttons">
                <button type="button" className="btn btn-secondary">Enable</button>
                <button type="button" className="btn btn-light">Disable</button>
                <button type="button" className="btn btn-danger">Remove</button>
            </div>
            <hr></hr>
                <div className = "tabs">
                    <ul className="nav nav-tabs nav-justified ">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#Attendance">Attendance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  data-toggle="tab" href="#Home-work">Home work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  data-toggle="tab" href="#Exams">Exams</a>
                        </li>
                    </ul>
                </div>
                <div className = "Container">
                    <div className="fade show active" id="Attendance" role="tabpanel" >
                        <table className="Table">
                            <thead>
                                <tr>
                                <th>الغياب</th>
                                <th>الحصة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.data.attendance}</td>
                                    <td>الاولى</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="fade" id="Home-work"  role="tabpanel">
                        <table className="Table">
                            <thead>
                                <tr>
                                <th>الواجب المنزلى</th>
                                <th>الحصة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>الاولى</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="fade " id="Exams" role="tabpanel" >
                        <table className="Table">
                            <thead>
                                <tr>
                                <th>الدرجة</th>
                                <th>الحصة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>الاولى</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
         </div>
        );
    }
}    

export default Profile;

/*
*/ 