import React from 'react';
import PropTypes from 'prop-types';
import WeatherBlock from '../WeatherConf/WeatherArq';

const ForecastElm= ({ diaSem , hora, data}) => (
    <div>
        <h2>{ diaSem } - { hora } hs</h2>
        <WeatherBlock data={data}></WeatherBlock>
    </div>
);

ForecastElm.propTypes ={
    diaSem: PropTypes.string.isRequired,
    hora: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        tiempoEstado: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    }),
}

export default ForecastElm;