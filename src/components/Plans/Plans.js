import React, {useState } from 'react';
import Card from '../../UIKit/Card/Card';
import ClickToActionBtn from '../../UIKit/ClickToActionBtn/ClickToActionBtn';
import { useNavigate } from 'react-router-dom';
import './plans.css';

const WorkspacePlans = ({handleProgressState}) =>{

    const [selectPlan , setSelectPlan] = useState({team: false , individual: false});
    const [warning , setWarning] = useState('');
    const navigate = useNavigate();

    const clickPlan = (id) =>{
        let obj = {...selectPlan};
        setWarning('');
        Object.keys(obj).forEach(item=>{
            if(item=== id){
                obj[item] = true;
            }
            else{
                obj[item] = false;
            }
        })
        setSelectPlan(obj);
    }

    const handleButtonClick = ()=>{
        if(!Object.keys(selectPlan).filter(item=> selectPlan[item]).length){
            setWarning('Select a plan');
            return;
        }
        navigate('/launch');
        handleProgressState(3);

    }

    return (
        <div className='workspace-plans'>
            <div className='plans-heading'> How are you planning to use Eden ?</div>
            <div className='plans-sub-heading'>We streamline your setup experience accordingly</div>
            <div className='cardContainer'>
                <Card plan={selectPlan} type="individual" onClick={()=> clickPlan('individual')}/>
                <Card plan={selectPlan} type="team" onClick={()=> clickPlan('team')} />
            </div>
            <ClickToActionBtn heading="Create WorkSpace" onClick={handleButtonClick}/>
            {warning && <div className='errors-box'>{warning}</div>}
        </div>
    )
}

export default WorkspacePlans;