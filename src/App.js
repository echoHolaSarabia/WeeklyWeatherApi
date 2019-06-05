import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


//import {MuiThemeProvider} from 'material-ui/styles';
import './App.css';
//import { withStyles } from '@material-ui/styles';

const cities = [
  'Madrid,es',
  'Washington,us',
  'Buenos Aires,ar',
  'Bogota, col',
  'Lima,pe',
];

class App extends Component {

  //Alteración del estado del componente para asignarle la ciudad
  constructor(){
    super();

    //Recordemos que "this.state =" solo se puede hacer en el constructor. Luego, this.setState 
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({city});
  }

  render(){
    const {city} = this.state;

    return(
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App  
              </Typography>    
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities = {cities}
            onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  /*Dado que City isRequired, y no quiero poner cosas como "Ninguna Ciudad*/
                  !city ? 
                    <h1>No se seleccionó ciudad</h1> :
                    <ForecastExtended city={city}></ForecastExtended>

                    /*También podría hacerlo al revés: Mostrar el Forecast si existe City, en caso contrario no renderizar nada
                    city ?
                      <ForecastExtended city={city}></ForecastExtended> : 
                      null */
                }
              </div>
            </Paper>
          </Col>
        </Row>
       
      </Grid>

    );
  }
}

export default App;
