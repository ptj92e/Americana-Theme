import React from 'react';

import HomeLanding from '../../components/homeLanding/homeLanding';
import RoomList from '../../components/roomList/roomList';

import './home.css';

function HomePage() {
    return (
        <div id='home'>
            <HomeLanding />
            <div id='so-header'>
                <h1>Americana Owners Suites</h1>
            </div>
            <div id='amenities'>
                    <p>Start with our unique setting; while everything you might want to see or do - from the slopes to the
                        beaches to shopping and dining in town - is just five minutes away, our landscaped grounds, picnic areas
                        and fire pits offer the chance to experience Tahoe’s quieter side.</p>
                    <p>Don’t forget the other perks such as Wi-Fi Internet, and Continental Breakfast (coffee, tea, assorted
                        freshly made donuts, hard boiled eggs and fruit) served daily. You’ll also find piping hot coffee and fresh
                        popcorn in the lobby throughout the day and don’t forget our DVD movie library.</p>
            </div>
            <RoomList />
        </div>
    )
}

export default HomePage;
