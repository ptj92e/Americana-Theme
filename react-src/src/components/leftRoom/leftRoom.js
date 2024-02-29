import React from 'react';

import './leftRoom.css';

function LeftRoom(props) {
    return (
        <div className='roomContainer'>
            <h1 style={{ marginBottom: '30px' }} >{props.title}</h1>
            <div className='leftRoom'>
                <img src={props.src} alt={props.alt} />
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default LeftRoom;
