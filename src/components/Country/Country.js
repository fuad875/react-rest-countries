import React from 'react';
import'./Country.css';
const Country = (props) => {
     
    console.log(props);

    return (
        <div className='country'>
            <h2>This is Country Name: {props.name} </h2>
            <p>population:{props.population}</p>
            <p><small>Area: {props.area}</small></p>
            <p><small>Region:{props.region}</small></p>
        </div>
    );
};

export default Country;