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
        setNewTemperature (!newTemperature)
        setGetFahrenheit(temperatureFahrenheit);
        console.log(feelsLikeFahrenheit);
    }
    
    // const fahrenheit = () => {
    //   setNewTemperature (!newTemperature)
    // }

    const changeTemp = () => {
      return <>{getFahrenheit}</>
    }
    
    return ( 
        <div>
        
          <button onClick={convertTemp}>Change Temperature</button>
          <CardBody id="temp">{newTemperature ? "Fahrenheit" : "Celsius"}
            <CardTitle  className="text-primary">Current Temp: {newTemperature ? getFahrenheit : temp }°</CardTitle>
            <CardSubtitle className="text-primary">Feels Like: {newTemperature ? getFahrenheit : feels_like}°</CardSubtitle>
            <CardText className="text-primary">Humidty is {humidity}.</CardText>
          </CardBody>
        
      </div> 
     );
}
 
export default WeatherChild;