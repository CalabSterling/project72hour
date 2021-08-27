import React, { useState } from 'react';
import { Card } from 'reactstrap';
import WeatherChild from './WeatherChild';


const WeatherParent = (props) => {
    // const [results, setResults] = useState('');
    const [weather, setWeather] = useState([]);
    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    // const [status, setStatus] = useState(null);


    const key = '507c0093dc310b7d686f061c38a076e9';
    let lat = '39.791000';
    let lon = '-86.148003';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

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

    // const displayResults = () => weather.map

    
    

    return ( 
        <div>
            <h1>Hello from WeatherParent</h1>
            {/* <p>weather: {results}</p> */}
            <button onClick={handleClick}>Click for Weather</button>
            <Card>{weather ? <WeatherChild temperaturetoday={weather} /> : null}</Card>
        </div>
     );
};
 
export default WeatherParent;