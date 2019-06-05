//Separo toda esta parte por buenas prácticas: para seguir la arquitectura SOLID
//S - Single responsibility: Cada hoja una única responsabilidad. En este caso, formatear datos

import convert from 'convert-units';
import {
    SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZEL
} from './../data/weathers';
    
//Cambia unidades de tiempo a Celsius
const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(0);
}

//Dado que los datos de la API estan en un formato diferente a los mios, hago las transformaciones correspondientes
 //Esto me va a permitir que si la estructura de datos de la API cambia, únicamente seré necesario cambiar esta parte
const getWeatherState = weather => {
    const {id } = weather;

    //Como en OpenWeather hay centenares de estados de tiempo, pero están agrupados en grupos de 100 dependiendo de un tipo general...
    if(id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZEL;
    }else if(id < 500){
        return RAIN
    }else if(id < 700){
        return SNOW;
    }else if(id===800){
        return SUN;
    }else{
        return CLOUD;
    }
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const tiempoEstado = getWeatherState(weather_data.weather[0]);
    const temperatura = getTemp(temp);

    const data = {
        humidity,
        temperatura,
        tiempoEstado,
        viento: `${speed} m/s`,
    }

        return data;
    }

export default transformWeather;