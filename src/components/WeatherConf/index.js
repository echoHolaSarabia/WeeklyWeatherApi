import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

//Uso destructuring xk no he puesto "export default"
import { PropTypes } from 'prop-types';

import Location from './Location';
import WeatherArq from './WeatherArq';
import './styles.css';

class WeatherLocation extends Component{

    //LifeCycle
    //Inicio - Configuración inicial del componente
    constructor(props) {
        super(props);
        const { city } = props;

        //this.state únicamente se puede usar en el constructor. Para cambiar después, this.setState
        this.state = {
            city,
            data: null,

        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        //Dado que en el ciclo de vida no puedo cargar datos en el primer render ni aunque lo pusiera en componentWillMount
        //Toca cargarlo en el segundo render y poner un spinner de carga
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    //deprecated en versión 17 de React
    //componentWillMount() {
        //console.log("UNSAFE componentWillMount");
    //}

    //deprecated en versión 17 de React
    //componentWillUpdate(nextProps, nextState) {
        //console.log("UNSAFE componentWillUpdate");
    //}
   

    

    //Acción del OnClick
    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);
        //Extraigo datos de la API Rest
         //Devuelve una promise
        fetch(api_weather).then(resolve =>{
            //Devuelve una cabecera sin el boddy accesible. Así que otra nueva promise
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);

            this.setState({
                data:newWeather
            })            
        });
    }

    render(){
        console.log("render");
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            //Conecto 2 clases entre sí: Primer nivel de burbujeo
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>

                {/* Operador ternario para cargas lentas
                Existe data? TRUE : FALSE*/}
                {data ? 
                    <WeatherArq data={data} /> : 
                    <CircularProgress size={60}/>
                }

                {/* <button onClick={this.handleUpdateClick}>Actualizar</button>*/}
            </div>
        );
    }
}

WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;