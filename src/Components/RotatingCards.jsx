import React, { useState } from 'react';
import './RotatingCards.css';

const RotatingCardRTC = ({ content, backgroundImage }) => {
    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="rotating-cards-face-rtc" style={cardStyle}>
            <span className="rotating-cards-content-rtc">{content}</span>
        </div>
    );
};

const RotatingCardsRTC = () => {
    const items = [
        {
            content: 'This is something',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/089de2b8-0cf5-4504-a0f8-04931518462f/3D_Animation_Style_fashion_decent_background_outdoor_0.jpg',  // Unique URL for the third image            ,
        },
        {
            content: 'Very special',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'Special is the key',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'This is something',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'Very special',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'Special is the key',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        }, {
            content: 'This is something',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'Very special',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },
        {
            content: 'Special is the key',
            backgroundImage: 'https://flamelab.io/img/avatar-sm.png',
        },

        // Add more items here...
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="rotating-cards-container-rtc">

            <div className="rotating-cards-carousel-rtc" onMouseEnter={() => setActiveIndex(-1)} onMouseLeave={() => setActiveIndex(0)}>
                {items.map((item, index) => (
                    <RotatingCardRTC
                        key={index}
                        content={item.content}
                        backgroundImage={item.backgroundImage}
                    />
                ))}
            </div>

        </div>
    );
};

export default RotatingCardsRTC;
