import './App.css';
import React, {useState, useEffect} from 'react';
import NASA from './NASAComponents/NASA';
import Kara from './NASAComponents/Kara/Kara'

function App() {
  const [position, setposition] = useState({lat: 0, lon: 0});

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(success => {
          var lat = success.coords.latitude;
          var lon = success.coords.longitude;
          console.log(lon, lat)
          setposition({lat: lat, lon: lon})
      })
  }, []);

  return (
    <div>
      <h1>72 Hour Project</h1>
      <NASA position={position} />
      {/*<Kara />*/}
    </div>
  );
}

export default App;
