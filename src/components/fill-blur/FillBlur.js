import React from "react";
import "./fillBlur.css";

const FillBlur = ({ url }) => {
    console.log(url);
    return (
        <div className="fill-blur-content">
            <div
                className="fill-blur-backgroung"
                style={{ backgroundImage: `url(${url})` }}
            />
            <img src={url} />
        </div>
    );
};

export default FillBlur;
