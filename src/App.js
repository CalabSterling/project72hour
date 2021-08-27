import './App.css';
import WeatherParent from './weather/WeatherParent';
import React, {useState, useEffect} from 'react';
import LocationFinder from './NASAComponents/LocationFinder';

function App() {
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
    <div>
      <h1>72 Hour Project</h1>
      <WeatherParent />
      <LocationFinder position={position} />
    </div>
  );
}

export default App;
