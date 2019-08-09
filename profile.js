import React from 'react';
import Unknown from '../unknown.jpg';

const Profile = () =>{
    return(
        <div>
            <div className = "nav-bar">
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
                <a href = "#" className="link">Home</a>
            </div>
            <div className = "profile-information">
                <img src = {Unknown} alt = "unknown" className = "unknown-image"/>
                <div className = "information-block">
                    <h1 className = "information">Ehab Tawfik Ahmed</h1>
                    <h2 className = "information">El salam</h2>
                    <h3 className = "information">Group 9</h3>
                </div>
            </div>
            <hr></hr>
            <div className = "tabs-container">
                <div className = "Tabs">
                    <ul  className="tabs">
                        <li className="tab col s3"><a href="#test1">Attendance</a></li>
                        <li className="tab col s3"><a className="active" href="#test2">Home Work</a></li>
                        <li className="tab col s3"><a href="#test3">Exams</a></li>
                    </ul>
                </div>
                <div className = "container">
                    <div id="test1" className="col s12"><h1>Attendance</h1></div>
                    <div id="test2" className="col s12"><h1>Home Work</h1></div>
                    <div id="test3" className="col s12 "><h1>Exams</h1></div>
                </div>
            </div>
                <div class="footer"><h5>&copy;2019 El-seify</h5></div>       
        </div>
    );
}    

export default Profile;

//<a href= "#" className="btn pink">Add</a>
//<i className="material-icons red-text">error</i>