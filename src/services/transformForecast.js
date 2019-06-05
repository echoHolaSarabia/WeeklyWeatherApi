//Librería para el manejo de fechas
import moment from 'moment';
//Para hacer que los días de la semana se vean en español
import 'moment/locale/es' 

import transformWeather from './transformWeather';

const transformForecast = data =>(
    data.list.filter(item => (
        //Los datos de la hora vienen en formato unix
        //Me interesa solo el pronóstico a las 6, 12 y 18h
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => (
        {
            diaSem: moment.unix(item.dt).format('ddd'),
            hora : moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))

);

export default transformForecast;