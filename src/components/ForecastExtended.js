//Importas {Component} cuando vas a crear un componente no funcional
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastElm from './ForecastFormat';
import transformForecast from './../services/transformForecast';
import './styles.css';


const api_key = "c52b0723de0b3a3fea8729e3a69c47c0";
const url ="https://api.openweathermap.org/data/2.5/forecast";

//Componente no funcional
class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={ forecastData:null }
    }

    componentDidMount(){
        //Si generamos la actualización de datos aquí, únicamente cargará los datos en ForecastExtended 
        //la primera vez. Ya que componentDidMount() solo se ejecuta una única vez en la vida de un componente.
        //Así que para que siga cambiando cada vez que seleccionamos otra ciudad, componentWillReceiveProps()
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        //La ciudad actual es diferente de la nueva?
        if(nextProps.city !== this.props.city){
            //forecastData: null para que aparezca el indicador de carga
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }

    }

    updateCity = city =>{
        //Uso fetch o axios. Axios tiene mayor cobertura de soporte. Fecth es nativo.
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        //Generamos promise: Su ejecución es asincrónica
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData })
            }
        )
    }

     renderForecastItemDays(forecastData){
        return forecastData.map ( forecast => (
            <ForecastElm 
                key={`${forecast.diaSem}${forecast.hora}`}
                diaSem={forecast.diaSem} 
                hora={forecast.hora} 
                data={forecast.data}>
            </ForecastElm>));
    }

    renderProgress = () =>{
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }

    render(){
        //Se puede hacer así
        //const city = this.props.city;
        //O con destructuring al llamarse la variable igual que el parametro
        const {city} = this.props;

        const{ forecastData } = this.state;

        return(
            <div className='forecast-title'>
                <h2>Pronóstico Extendido para {city}</h2>
                { forecastData ? 
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;