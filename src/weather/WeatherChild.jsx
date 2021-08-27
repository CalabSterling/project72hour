
import {
  CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
 
const WeatherChild = (props) => {
    const {temp, feels_like, humidity}=props.temperaturetoday;
 
    return ( 
        <div>
        
          
          <CardBody>
            <CardTitle tag="h5">{temp}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{feels_like}</CardSubtitle>
            <CardText>{humidity}</CardText>
            <Button>Button</Button>
          </CardBody>
        
      </div> 
     );
}
 
export default WeatherChild;