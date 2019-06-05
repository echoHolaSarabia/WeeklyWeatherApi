import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER, 
    DRIZZEL
} from '../../../data/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm", 
    [DRIZZEL]: "day-showers",
}

const getWeatherIcon = (weatherState) => {
    
    const icon = icons[weatherState];
    const sizeIcon = "4x";


    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>
}

const WeatherTemperature = ({temperatura, tiempoEstado}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon (tiempoEstado)
        }
        <span className="">{`${temperatura}`}</span>
        <span className="temperatureType">{` ºC`}</span>
    </div>
);

//Validando las propiedades
WeatherTemperature.propTypes = {
    temperatura : PropTypes.number.isRequired, 
    tiempoEstado: PropTypes.string.isRequired,
};

export default WeatherTemperature;