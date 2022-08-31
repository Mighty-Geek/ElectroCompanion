import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Banner extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src="banner.png"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Banner;