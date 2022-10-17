import React from 'react';
import './clickToAction.css'

const ClickToActionBtn = ({heading , onClick=()=>{}}) =>{
    return (    
        <button type="button" className="btnElement" onClick={onClick}>{heading}</button>
    )
};
export default ClickToActionBtn;