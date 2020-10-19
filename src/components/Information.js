import React from 'react';
import tecnos1 from "../images/tecnos1.png";
import tecnos2 from "../images/tecnos2.png";
import tecnos3 from "../images/tecnos3.png";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Information() {
    return (
        <section className="infoPage">
            <Header
                route1="./Home"
                link1="Proyectos"
                route2="./About"
                link2="Sobre mí"
                sectionName="Tecnologías"
            />
            <div className="infoPage__box ">
                <Carousel className="infoPage__box--img2">
                    <Carousel.Item className="infoPage__box--img2--control" >
                        <img
                            className=" infoPage__box--img2--slide"
                            src={tecnos1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="infoPage__box--img2--control">
                        <img
                            className=" infoPage__box--img2--slide"
                            src={tecnos2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="infoPage__box--img2--control">
                        <img
                            className=" infoPage__box--img2--slide"
                            src={tecnos3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />
        </section>
    );
}

export default Information;