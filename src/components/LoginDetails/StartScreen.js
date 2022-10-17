import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import ClickToActionBtn from "../../UIKit/ClickToActionBtn/ClickToActionBtn";
import InputBox from "../../UIKit/InputBox/Input";
import './StartScreen.css'

const StartOnboarding = ({handleProgressState}) =>{

    const [state , setState ] = useState({fullName : ' ', displayName : ''});
    const [errors , setErrors] = useState({ fullName : ' ' , displayName: ' '});
    const navigate = useNavigate();


    const handleChange = (e)=>{
        const obj = {...state};
        obj[e.target.id] = e.target.value;
        setState(obj);
        errorCheck(e.target.id);
    }

    const errorCheck= (id)=>{
        if(!state[id]){
            setErrors({...errors , [id]: `Enter ${id==="fullName" ? "full name" : 'display name'} correctly`})
        }
        else{
            setErrors({...errors , [id] : ''});
        }
    }

    const handleErrorCheck = () =>{
        if(state.fullName === " " && state.displayName === ""){
            setErrors({...errors , fullName: "Enter full name correctly" , displayName: 'Enter display name correctly' });
        }
        else if(state.fullName === ""){
            setErrors({...errors , fullName: 'Enter full name correctly' , displayName: ''});
        }
        else if(state.displayName === ""){
            setErrors({...errors , displayName: "Enter display name correctly", fullName: ''});
        }
        else{
            setErrors({...errors , displayName: '' , fullName :''})
        }
    }

    const handleClick = ()=>{
       if(state.fullName === "" || state.displayName === ""){
        handleErrorCheck();
       }
        else {
            setErrors({...errors ,fullName : '' , displayName : ''});
            navigate('/workspace');
            handleProgressState(1);
        }

    }

    return (
        <div className="start-onboarding">
            <div className="main-header">
                 <div className="start-header">Welcome! First things first...</div>
                <div className="sub-header">You can always change them later</div>
            </div>
            <div className="fullName">
                <InputBox id="fullName" heading="Full Name" state={state} onChange={(e) => handleChange(e)}/>
            </div>
            {
                errors.fullName && <div className="errors-box">{errors.fullName}</div>
            }
            <div className="DisplayName">
                <InputBox id="displayName" heading="Display Name" state={state} onChange={(e) => handleChange(e)}/>
            </div>
            {
                errors.displayName && <div className="errors-box">{errors.displayName}</div>
            }
            <div className="clickToAction">
                <ClickToActionBtn heading="Create Workspace" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default StartOnboarding;
