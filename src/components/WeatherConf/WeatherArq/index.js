import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import './styles.css';

const WeatherData = ({data: {temperatura, tiempoEstado, humidity, viento}}) => (
   <div className="weatherDataCont">
        <WeatherTemperature 
            temperatura = {temperatura} 
            tiempoEstado={tiempoEstado} 
        />
        <WeatherExtraInfo 
            humidity = {humidity} 
            viento = {viento} 
        />
    </div>
);

//Validacion
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        tiempoEstado: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    }),
};

export default WeatherData;