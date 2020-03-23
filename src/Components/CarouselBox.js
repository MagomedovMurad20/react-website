import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo from '../Assets/photo.jpg'
import Photol from '../Assets/photol.jpeg'
import Photoll from '../Assets/photolll.jpeg'
import CarouselCaption from 'react-bootstrap/CarouselCaption';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photo}
                        alt="Mountains"
                    />
                    <CarouselCaption>
                        <h3> IT-doc </h3>
                        <p> IT-doc самая мощная и продуктивная студия айти решений.
                            Мы предоставляем услуги создания технических решений.
                            Технического консалтинга и сопровождения.
                            Обращайтесь к нам. Мы - номер один в своей области </p>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photol}
                        alt="Mountainsl"
                    />
                    <CarouselCaption>
                        <h3> Наши клиенты </h3>
                        <p> Наше портфолио богато успешными кейсами.
                            Нашими клиентами являются: Сбербанк, Правительство РД, 05ру, Киргу </p>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Photoll}
                        alt="Mountainsll"
                    />
                    <CarouselCaption>
                        <h3> Наша команда </h3>
                        <p> Наша команда состоит из архитекторов сферы IT.
                            Доверяя нам, вы доверяете профессионалам </p>
                    </CarouselCaption>
                </Carousel.Item>

            </Carousel>
        )
    }
}
