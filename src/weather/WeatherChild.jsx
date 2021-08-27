import React, { useState } from 'react';
import {
  CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
 
const WeatherChild = (props) => {
    const {temp, feels_like, humidity}=props.temperaturetoday;
    const [newTemperature, setNewTemperature] = useState(false);
    const convertTemp = () => {
        const temperature = props.temperaturetoday.temp;
        const feelsLike = props.temperaturetoday.feels_like;
        let temperatureFahrenheit = temperature * 1.8 + 32;
        let feelsLikeFahrenheit = feelsLike * 1.8 + 32;
        console.log(temperatureFahrenheit);
        console.log(feelsLikeFahrenheit);
    }
    
    const fahrenheit = () => {
      setNewTemperature (!newTemperature)
    }
    
    return ( 
        <div>
        
          <button onClick={fahrenheit}>Change Temperature</button>
          <CardBody id="temp">{newTemperature ? "fahrenheit" : "celsius"}
            <CardTitle  className="text-primary">Current Temp: {temp}°</CardTitle>
            <CardSubtitle className="text-primary">Feels Like: {feels_like}°</CardSubtitle>
            <CardText className="text-primary">Humidty is {humidity}%</CardText>
            <input type="checkbox" value="true" onChange={convertTemp}/>
            
          </CardBody>
        
      </div> 
     );
}
 
export default WeatherChild;