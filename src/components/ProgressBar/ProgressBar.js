import React, {useEffect, useState} from 'react';
import './progressBar.css'

const ProgressBar = ({stage}) =>{

    const [state , setState ] = useState([
        { id: "start", started: true },
        {id: 'workspace' , started: false},
        {id: 'plans' , started: false},
        {id: "launch" , started: false},
    ]);

    // const [stage , setStage ]= useState(0);

    // useEffect(()=>{
    //     switch(window.location.pathname){
    //         case '/workspace': {
    //             setStage(1);
    //             break;
    //         }
    //         case '/launch': {
    //             setStage(2);
    //             break;
    //         }
    //         case '/plans': {
    //             setStage(3);
    //             break;
    //         }
    //         default:
    //             break;
    //     }

    // },[window.location.pathname]);

    

    return (
        <div className='progressBar'>
            {
                state.map((item, index)=>{
                    return (
                        <>
                            <span className={`circle ${ index<= stage ? 'started' : ''}`}>{index+1}</span>
                            { index < state.length -1 && <span className={`progressline ${index < stage ? "completed" : ''}`}></span>}
                        </>
                    )
                })
            }
        </div>
    )
};

export default ProgressBar;