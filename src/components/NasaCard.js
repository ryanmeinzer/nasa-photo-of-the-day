import React from "react";

const NasaCard = props => {
    return (
        <div className="photo-list" key={props.date}>
            <h2>Photo Title: {props.title}</h2>
            <p>Photo Explanation: {props.explanation}</p>
            <img src={props.hdurl}/>
        </div>
    );
};

export default NasaCard;