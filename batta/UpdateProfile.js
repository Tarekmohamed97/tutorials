import React from 'react';

class UpdateProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                name:null,
                school:null,
                phoneNumber:null,
                fatherPhoneNumber:null,
                fatherJob:null
            },
            centers: {
                center1:"المستقبل",
                center2: "VIP",
                center3: "الانشا",
                center4: "تيرا",
                center5: "المجد",
                center6: "الفردوس",
                center7: "المصرى-امبابة",
                center8: "المصرى-هرم"
            },
            groupDays :{
                day1: "الاحد",
                day2: "الاثنين",
                day3: "الثلاثاء",
                day4: "الاربعاء",
                day5: "الخميس",
                day6: "الجمعة",
                day7: "السبت",
            },
            groupTimes: {
                time1: "8:30-11:30",
                time2: "12:30-3:30"
            }
        }
    }
    handleChange = (e) => {
        let id = e.target.id;
        let value = e.target.value;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [id]: value
            }
        }));
        console.log(this.state.data);
    }

   render(){
    return(
    <div className = "update-container">
        <form>
            <h1 className="update-profile-head">Update your profile</h1>
            <div className = "form-container">
                <div>
                    <label>Full Name</label>
                    <input
                       id = "name" 
                       type="text"
                       placeholder="Full Name..."
                       onChange = {this.handleChange} ></input>
                    <i className="fa fa-user prefix grey-text"></i>
                </div>
                <div>
                    <label>School</label>
                    <input 
                        id="school"
                        type="text"
                        placeholder="school..."
                        onChange = { this.handleChange} ></input>
                    <i className="fas fa-school prefix grey-text"></i>
                </div>
                <div >
                    <label>Phone number</label>
                    <input
                        id="phoneNumber"
                        type="text" 
                        placeholder="Phone Number..." 
                        onChange = { this.handleChange} ></input>
                    <i className="fas fa-phone prefix grey-text"></i>
                </div>
                <div>
                    <label >Father's Phone Number</label>
                    <input
                        id = "fatherPhoneNumber"
                        type="text"
                        placeholder="Father's Phone Number..."
                        onChange = { this.handleChange} ></input>
                    <i className="fas fa-phone prefix grey-text"></i>
                </div>
                <div>
                    <label>Father's job</label>
                    <input
                        id = "fatherJob"
                        type="text"
                        placeholder="Father's job..."
                        onChange = {this.handleChange} ></input>
                    <i className="fas fa-briefcase prefix grey-text"></i>
                </div>
                <div className="text-center">
                    <button
                        className="update-button"
                        type="submit"
                        disabled = {!(this.state.data.name)|| !(this.state.data.school)
                        || !(this.state.data.phoneNumber) || !(this.state.data.fatherPhoneNumber)
                        || !(this.state.data.fatherJob)}>Update</button>    
                </div> 
            </div>
            <h1 className="update-profile-head">Change Group</h1>
            <div className="form-group">
                <label htmlFor="sel1">Choose center</label>
                <i className="fas fa-building prefix grey-text"></i>
                <select className="form-control" id="sel1">
                    <option>{this.state.centers.center1}</option>
                    <option>{this.state.centers.center2}</option>
                    <option>{this.state.centers.center3}</option>
                    <option>{this.state.centers.center4}</option>
                    <option>{this.state.centers.center5}</option>
                    <option>{this.state.centers.center6}</option>
                    <option>{this.state.centers.center7}</option>
                    <option>{this.state.centers.center8}</option>
                </select>
                <label htmlFor="sel1">Choose group:</label>
                <i className="fas fa-users prefix grey-text"></i>
                <select className="form-control" id="sel1">
                    <option>{this.state.groupDays.day1} {this.state.groupTimes.time1}</option>
                    <option>{this.state.groupDays.day1} {this.state.groupTimes.time2}</option>
                    <option>{this.state.groupDays.day2} {this.state.groupTimes.time2}</option>
                    <option>{this.state.groupDays.day3} {this.state.groupTimes.time1}</option>
                    <option>{this.state.groupDays.day4} {this.state.groupTimes.time1}</option>
                    <option>{this.state.groupDays.day4} {this.state.groupTimes.time2}</option>
                    <option>{this.state.groupDays.day5} {this.state.groupTimes.time1}</option>
                    <option>{this.state.groupDays.day6} {this.state.groupTimes.time1}</option>
                </select>
            </div>
            <div className="text-center">
                <button className="change-button" type="submit">change</button>
            </div>
        </form>
    </div>
    )
    };
}

export default UpdateProfile;

/*
handleInputChange(event){
        const target = event.target;
        if(!target.value){
            this.setState((prevState) =>({count : prevState.count}));
            console.log(this.state.count)
        }else{
            this.setState((prevState) =>({count : prevState.count + 1}));
            }
        if(this.state.count > 0){
            this.setState(() =>({disable : true}));
        }else{
            this.setState(() =>({disable : false }));
        }
    }
*/ 