import React from 'react'
import person from '../../icons/assets/person.png';
import team from '../../icons/assets/team.png';
import './card.css';

const Card = ({type , onClick , plan}) =>{
    if(type === "individual"){
        return (
            <div className={`cardClass ${plan.individual ? 'select-border' : ''}`} onClick={onClick}>
                <img src={person} className="card-image" alt="person"/>
                <div className='card-heading'>For myself</div>
                <div className='card-description'>Write better. Think more clearly. Stay Organised.</div>
            </div>
        )
    }
    
    return (
        <div className={`cardClass ${plan.team ? 'select-border' : ''}`} onClick={onClick}>
            <img src={team} className="card-image" alt="team"/>
            <div className='card-heading'>With my team</div>
            <div className='card-description'>Wikis, docs, tasks & projects,all in one place</div>
        </div>
    )
};

export default Card;
