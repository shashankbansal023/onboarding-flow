import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ClickToActionBtn from '../../UIKit/ClickToActionBtn/ClickToActionBtn';
import InputBox from '../../UIKit/InputBox/Input';
import './workspace.css';

const CreateWorkspace = ({handleProgressState}) =>{
    const [state , setState] = useState({workspaceName : '', workspaceUrl: ''});
    const [errors , setErrors] = useState({workspaceName: "" , workspaceUrl: ""})
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const obj = {...state};
        obj[e.target.id] = e.target.value;
        setState(obj);
        errorCheck(e.target.id);
    }

    const errorCheck= (id)=>{
        if(!state[id]){
            setErrors({...errors , [id]: `Enter ${id==="workspaceName" ? "workspace name" : 'workspace url'} correctly`})
        }
        else{
            setErrors({...errors , [id] : ''});
        }
    }

    const handleErrorCheck = () =>{
        if(state.workspaceName === "" && state.workspaceUrl === ""){
            setErrors({...errors , workspaceName: "Enter workspace name " , workspaceUrl: 'Enter workspace url'});
        }
        else if(state.workspaceName === ""){
            setErrors({...errors , workspaceName: 'Enter workspace name' ,workspaceUrl: ''});
        }
        else if(state.workspaceUrl === ""){
            setErrors({...errors , workspaceName: '', workspaceUrl: 'Enter workspace url'});
        }
        else {
            setErrors({...errors , workspaceName: '' ,workspaceUrl: ''});
        }
    }

    const handleClick = () =>{
        if(state.workspaceName === "" || state.workspaceUrl===""){
            handleErrorCheck();
        }else{
            navigate('/plans');
            handleProgressState(2);
        }
    }

    return (
        <div className='workspace-container'>
            <div className='workspace-heading'>Lets set up a home for all your work</div>
            <div className='workspace-sub-heading'>You can always create another workspace later</div>
            <InputBox  id="workspaceName" heading="Workspace Name" state={state} onChange={(e)=> handleChange(e)} />
            {errors.workspaceName && <div className='errors-box'>{errors.workspaceName}</div>}
            <div className='workspaceUrl'>
                <div cl></div>
                <div className='workspace-input-box'>
                    <div className='workspace-input'>www.eden.com/</div>
                    <input type="text"  id="workspaceUrl" value={state.workspaceUrl} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            {errors.workspaceUrl && <div className='errors-box'>{errors.workspaceUrl}</div>}
            <ClickToActionBtn heading="Create Workspace" onClick={handleClick} />  
        </div>

    )
};

export default CreateWorkspace;