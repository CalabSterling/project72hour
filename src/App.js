import './App.css';
import WeatherParent from './weather/WeatherParent';
import React, {useState, useEffect} from 'react';
import LocationFinder from './NASAComponents/LocationFinder';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron
} from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [position, setposition] = useState({lat: 0, lon: 0});

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(success => {
          var lat = success.coords.latitude;
          var lon = success.coords.longitude;
          console.log(lon, lat)
          setposition({lat: lat, lon: lon})
      }
      )
  }, []);

  return (
    <div className="App">
      <Navbar color="primary" light expand="md" >
        <NavbarBrand href="/"><h4 className="Linktext">Location</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><h4 className="Linktext">Events</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#weather"><h4 className="Linktext">Weather</h4></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    <div className="Container">
      <Jumbotron className="Jumbotron">
      </Jumbotron>
    </div>
      
      <div className="Body">
        <img src={require('./images/here.jpg').default} height={400} width={500} className="Here"/>

     
      <h1>72 Hour Project</h1>
      <LocationFinder position={position} />
      
      <div className="Weather" id="weather"></div>
      <WeatherParent position={position} />
      
      </div>
      <footer className="Footer">
        <p>© Project 72 Hours</p>
      </footer>
    </div>
  );
}

export default App;
