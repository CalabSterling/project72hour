import React, { useState } from 'react';
import { Card } from 'reactstrap';
import WeatherChild from './WeatherChild';


const WeatherParent = (props) => {
    const [weather, setWeather] = useState([]);
    console.log (props.position)
    const key = '507c0093dc310b7d686f061c38a076e9';
    let lat = (props.position.lat);
    let lon = (props.position.lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

   if('geolocation' in navigator) {
       console.log('geolocation is available')
   } else {
       console.log('geolocation is not available')
   };

  
    
    const fetchURL = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.main);
        setWeather(data.main);
    };

    const handleClick=(event)=>{
        event.preventDefault();
        fetchURL();
    };

    

    

    return ( 
        <div>
            <h1>Do you need an umbrella? Sunscreen? Winter hat?</h1>
            <h2>Get your local forecast here.</h2>
            <button onClick={handleClick} className="Weather-button">Click for Weather</button>
            <Card>{weather ? <WeatherChild temperaturetoday={weather} /> : null}</Card>
        </div>
     );
};
 
export default WeatherParent;