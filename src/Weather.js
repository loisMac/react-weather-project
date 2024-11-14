import React, { useState } from 'react';
import WeatherInfo from "./WeatherInfo";
import axios from 'axios';
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.temperature,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city
        })
        
      
    }

    function search() {
        const apiKey = "08tc66c2dd234aae04o0a7f3aee015bc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city.." 
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            
            </div>
    );
} else {
   
    search();
    return "Loading...";
} 
}