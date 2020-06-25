import React from "react";
import Header from "components/Header/Header";
import Parallax from "components/Parallax/Parallax";
import HeaderLinks from "components/Header/HeaderLinks";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Feed = (props) => {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <>
            <Header
                brand="Hotty Zone"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 0,
                    color: "white",
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg4.jpg")} />

            <Container maxWidth="sm">
                <img
                    src={"https://i.imgur.com/1nyWOCS.jpg"}
                    alt="..."
                    className="imgRoundedCircle imgFluid"
                />
                <SectionCarousel />
            </Container>
        </>
    );
};

export default Feed;
