import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
    
    //Forma tradicional
    //const city = props.city;
    
    //Destructuring - EC6
    const { city } = props;

    return (
        <div className="locationCont">
            <h1> 
                { city } 
            </h1>
        </div>
    );
};

//Validamos 
Location.propTypes = {
    //ptsr --> Prop Type String Required
    city: PropTypes.string.isRequired,
}

export default Location;
