import React from 'react';
import './Input.css';

const InputBox = ({id , heading, state , onChange})=>{
    return (
        <div className='input-box'>
            <p className='input-heading'>{heading}</p>
            <div className='input-details'>
                <input placeholder={heading} type="text" id={id} value={state.id} onChange={onChange}/>
            </div>
        </div>
    )
}

export default InputBox;