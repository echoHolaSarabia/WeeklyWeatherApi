import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//Paso parametros por destructuring
const WeatherExtraInfo = ({humidity, viento}) => (
    <div className="weatherExtraInfoCont">
        <span className ="extraInfoText">{`Humedad: ${humidity} %`}</span>
        <span className ="extraInfoText">{`Vientos: ${viento}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;