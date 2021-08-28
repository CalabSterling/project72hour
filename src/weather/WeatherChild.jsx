import React, { useState } from 'react';
import {
  CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
 
const WeatherChild = (props) => {
    const {temp, feels_like, humidity}=props.temperaturetoday;
    const [newTemperature, setNewTemperature] = useState(false);
    const [getFahrenheit, setGetFahrenheit] = useState(false);
    const convertTemp = () => {
        const temperature = props.temperaturetoday.temp;
        const feelsLike = props.temperaturetoday.feels_like;
        let temperatureFahrenheit = temperature * 1.8 + 32;
        let feelsLikeFahrenheit = feelsLike * 1.8 + 32;
        setGetFahrenheit(temperatureFahrenheit);
        console.log(feelsLikeFahrenheit);
    }
    
    const fahrenheit = () => {
      setNewTemperature (!newTemperature)
    }

    const changeTemp = () => {
      return <>{getFahrenheit}</>
    }
    
    return ( 
        <div>
        
          <button onClick={fahrenheit}>Change Temperature</button>
          <CardBody id="temp">{newTemperature ? "Fahrenheit" : "Celsius"} {newTemperature ? getFahrenheit : ""}°
            <CardTitle  className="text-primary">Current Temp: {temp}°</CardTitle>
            <CardSubtitle className="text-primary">Feels Like: {feels_like}°</CardSubtitle>
            <CardText className="text-primary">Humidty is {humidity}.</CardText>
            <input type="checkbox" value="true" onChange={convertTemp}/>
          </CardBody>
        
      </div> 
     );
}
 
export default WeatherChild;