import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import "./SectionCarousel.css";
import FillBlur from "components/fill-blur/FillBlur";

const imagesList = [
    "https://i.imgur.com/l8H7rLq.jpg",
    "https://i.imgur.com/iVe0ud4.jpg",
    "https://i.imgur.com/bMAP9Ek.jpg",
    "https://i.imgur.com/O55UZYv.jpg",
    "https://i.imgur.com/CsoEgiK.jpg",
    "https://i.imgur.com/HRbsCfh.jpg",
    "https://i.imgur.com/LIw0j1V.jpg",
    "https://i.imgur.com/1nyWOCS.jpg",
    "https://i.imgur.com/gjPG9Hf.jpg",
    "https://i.imgur.com/CUDeyty.jpg",
    "https://i.imgur.com/6A8TRyg.jpg",
    "https://i.imgur.com/lkB6YmL.jpg",
];

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem
                        xs={12}
                        sm={12}
                        md={8}
                        className={classes.marginAuto}
                    >
                        <Card carousel>
                            <Carousel {...settings}>
                                {imagesList.map((imagen) => {
                                    return (
                                        <div
                                            className="containerCaru"
                                            style={{
                                                backgroundImage: `url(${imagen})`,
                                            }}
                                            key={imagen}
                                        >
                                            <FillBlur url={imagen} />
                                            <div className="slick-caption">
                                                <h4>
                                                    <LocationOn className="slick-icons" />
                                                    {"model Name"}
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
