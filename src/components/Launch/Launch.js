import React from 'react';
import ClickToActionBtn from '../../UIKit/ClickToActionBtn/ClickToActionBtn';
import './launch.css';
import completed from '../../icons/assets/completed.png';

const Launch = () =>{
    return (
        <div className='launch-container'>
            <div className='launch-heading'>Congratulations Eren!</div>
            <div className='completed-img'>
                <img src={completed}  alt="Completed"/>
            </div>
            <div className='launch-sub-heading'>You have completed onboarding. You can start using Eden!</div>
            <ClickToActionBtn heading="Launch Eden"/>
        </div>
    )
};

export default Launch;