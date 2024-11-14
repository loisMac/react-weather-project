import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature,
            date: "Wednesday 7:00",
            description: response.data.condition.description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            city: response.data.city
        })
        
      
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city.." 
                className="form-control"
                autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6 img-temp">
                
                    <img src={weatherData.iconUrl}
                    alt="Sunny" />
                
                    <span className="temperature">{Math.round(weatherData.temperature.current)}</span>
                    <span className="unit">°C</span>
                    
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>
    );
} else {
    const apiKey = "08tc66c2dd234aae04o0a7f3aee015bc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
} 
}