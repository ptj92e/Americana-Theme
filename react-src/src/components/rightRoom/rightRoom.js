import React from 'react';

import './rightRoom.css';

function RightRoom(props) {
    return (
        <div className='roomContainer'>
            <h1 style={{ marginBottom: '30px' }} >{props.title}</h1>
            <div className='rightRoom'>
                <p>{props.description}</p>
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    )
}

export default RightRoom;
