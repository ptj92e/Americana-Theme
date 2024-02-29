import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import HTMLService from '../../services/htmlService';
import RoomsService from '../../services/roomsService';

import './roomList.css';

import RoomCard from '../roomCard/roomCard';

function RoomList() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function getRooms() {
            const roomList = await RoomsService.getRooms();
            setRooms(roomList);
        };

        getRooms();
    }, []);

    return (
        <Container>
            <div id='room-list'>
                <div id='room-list-content'>
                    <div className='rooms'>
                        {
                            rooms.map((room) => {
                                return (
                                    <RoomCard
                                        key={room.id}
                                        id={room.id}
                                        title={HTMLService.sanatizeHTML(room.title.rendered)}
                                        images={HTMLService.sanatizeHTML(room.excerpt.rendered)}
                                        description={HTMLService.sanatizeHTML(room.content.rendered)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <p><strong>Other property features include: </strong>Fitness Room, Free Onsite Laundry, 
                Free Public Computer and Printer, Free Bikes and Seasonal Equipment Like Sleds and Snowshoes
                Activities Center, offeringdaily hosted group activities, Basketball and Volleyball (non-winter)
                Kids play area with slide (non-winter), and Snow play area (winter)</p>
            <p style={{ color: '#01477F' }}>- OUR HEATED POOL &amp; SPA ARE OPEN AND HEATED YEAR ROUND.</p>
        </Container>
    )
}

export default RoomList;
