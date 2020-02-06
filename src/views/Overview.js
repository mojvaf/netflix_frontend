import React, { Component } from "react";
import Slider from "react-slick";
import GraceFrankie from "../assets/gracefrankie.png"
import Madmen from "../assets/madmen.png"
import TheMagicians from "../assets/themagicians.png"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div id="slider_one">
                        <img src={GraceFrankie} alt="" />
                    </div>
                    <div id="slider_two">
                        <img src={Madmen} alt="" />
                    </div>
                    <div id="slider_three">
                        <img src={TheMagicians} alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}