import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">
                Thu </div>
                <div className="WeatherForecast-icon">
                <WeatherIcon code="rain-day" size={32} />
                </div>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperatures-max">
                 19°
                 </span> 
                 <span className="WeatherForecast-temperatures-min">
                 10°
                 </span>
                 </div>
            </div>
        </div>
    </div>
}