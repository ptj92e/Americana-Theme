import React from "react";
import ImageParallax from "../imageParallax/imageParallax";

import './homeLanding.css';

import lakeSunsetImage from '../../assets/home/Lake_Sunset.jpeg';
import lakeRoadImage from '../../assets/home/Lake_Road.jpeg';
import fireworksImage from '../../assets/home/Fireworks.jpeg';
import skiingImage from '../../assets/home/Skiing.jpeg';
import lakeTahoeImage from '../../assets/home/Lake_Tahoe.jpeg';

const homeImages = [lakeSunsetImage, lakeRoadImage, fireworksImage, skiingImage, lakeTahoeImage];

function HomeLanding() {
    const scrollToElement = () => {
        const scrollDiv = document.getElementById('so-header').offsetTop - 120;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }

    return(
        <div id='landing'>
            <ImageParallax images={homeImages} />
            <div className='arrowDiv'>
                <button onClick={() => scrollToElement()} className='transparentButton'>
                    <i className='arrow down'></i>
                </button>
            </div>
        </div>
    )
}

export default HomeLanding;
