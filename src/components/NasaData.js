import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
export default function NasaData() {
    const [photo, setPhotos] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
                    <NasaCard
                    key={photo.date}
                    title={photo.title}
                    explanation={photo.explanation}
                    hdurl={photo.hdurl}
                    />
        </div>
    )
}