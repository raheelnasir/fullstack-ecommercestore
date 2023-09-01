import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const autoChange = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(autoChange);
        };
    }, [activeIndex, images]);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((image, index) => (
                    <li
                        key={index}
                        data-target="#carouselExampleIndicators"
                        data-slide-to={index}
                        className={index === activeIndex ? 'active' : ''}
                    ></li>
                ))}
            </ol>
            <div className="carousel-inner ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                        <img className="d-block w-100" src={image} width={"100%"} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default ImageCarousel;
