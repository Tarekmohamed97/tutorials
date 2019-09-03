import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility  : !prevState.visibility
            };
        });
    }
   
    render(){
    return(
        <div className = "About">
            <h1>م/عمرو الصيفى</h1>
            <hr></hr>
            <div className = "Section">
            <div className = "information">
                <button 
                className = "read-button"
                onClick = {this.handleToggleVisibility}>
                {this.state.visibility ? 'أقرأ اقل' : 'أقرأ المزيد'}
                </button>
                <h5>  عمرو عبدالعظيم الصيفى</h5>
            </div>
            {this.state.visibility && (
                <div className = "Information--big">
                    <p>بكالوريوس علوم وتربية</p>
                    <p>  jica بعثة السفر الى اليابان عام 2002 بالتعاون بين وزارة التربية والتعليم ومؤسسة </p>
                    <p> تمهيدي ماجستير قسم صحة نفسية</p>
                    <p>معلم خبير بمدرسة الاورمان الثانوية بنات</p>
                </div>
            )}
            </div>
        </div>
    );
            }
}

export default About;


