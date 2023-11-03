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
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        },
        {
            content: 'This is something',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        },
        {
            content: 'Very special',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        },
        {
            content: 'Special is the key',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        }, {
            content: 'This is something',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        },
        {
            content: 'Very special',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
        },
        {
            content: 'Special is the key',
            backgroundImage: 'https://cdn.leonardo.ai/users/9c5c81ee-0af6-45d2-a406-940450d62697/generations/fa323540-75a5-4e72-b957-2ec6a1e5bdf1/DreamShaper_v7_watch_modern_wallpaper_product_full_screened_wr_0.jpg?w=512',
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

                        backgroundImage={item.backgroundImage}
                    />
                ))}
            </div>

        </div>
    );
};

export default RotatingCardsRTC;
