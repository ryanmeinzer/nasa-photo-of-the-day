import React from "react";

const NasaCard = props => {
    return (
        <div className="photo-list" key={props.date}>
            <h2>Photo ID: {props.identifier}</h2>
            <p>Photo Caption: {props.caption}</p>
            <p>Photo Coordinates: {props.centroid_coordinates.lat}, {props.centroid_coordinates.lon}</p>
        </div>
    );
};

export default NasaCard;