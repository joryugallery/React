import React from "react";
import "./Card.css";

function Card(props) {
    const {title, backgroundColor, image,  children} = props;

    return (
        <div className="card">
            {image && <img className="card-img" src={image} alt={title}/>}
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;