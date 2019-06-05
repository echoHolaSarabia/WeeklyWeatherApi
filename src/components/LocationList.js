import React from 'react';
import WeatherLocation from './WeatherConf';
import PropTypes from 'prop-types';
import './styles.css';


//StateLess Component - Osea, una función de toda la vida
const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const strToComponents = cities => (
        //Debo usar una clave (key) para evitar que React acabe renderizando todos los componentes, incluso los no alterados.
        //Si uso index como Key, puede pasar que los componentes se rendericen cada vez en una posición, por lo que al final
        //acabaría renderizándolos todos igualmente. Lo ideal es emplear una clave natural, como el propio city si este no se
        //va a repetir.
        //Mejor evitar esto:
        //cities.map((city, index) => (<WeatherLocation key ={index} city={city}/>))
        cities.map(city => 
            (
                <WeatherLocation 
                    key ={city} 
                    city={city}
                    onWeatherLocationClick = {() => handleWeatherLocationClick(city)}
                />))
    );


    return(<div className="locationList">
        {strToComponents(cities)}
    </div>);
};


//Validamos
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;