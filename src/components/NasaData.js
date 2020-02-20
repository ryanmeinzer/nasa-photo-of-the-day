import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
export default function NasaData() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/EPIC/api/natural/date/2015-10-31?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response.data);
                setPhotos(response.data);
            })
            .catch(error => {
                console.log("No data returned", error);
            });
    }, []);
    return (
        <div className="photo">
            {photos.map(photo => {
                return (
                    <NasaCard
                    key={photo.date}
                    identifier={photo.identifier}
                    caption={photo.caption}
                    centroid_coordinates={photo.centroid_coordinates}
                    />
                );
            })}
        </div>
    );
}