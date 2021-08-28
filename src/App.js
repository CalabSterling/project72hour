import './App.css';
import TktMaster from './TktMaster';

import React, { useState, useEffect } from 'react';
import LocationFinder from './NASAComponents/LocationFinder';

function App() {
  const [position, setposition] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success => {
      var lat = success.coords.latitude;
      var lon = success.coords.longitude;
      console.log(lon, lat)
      setposition({ lat: lat, lon: lon })
    }
    )
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <TktMaster position={position} />
      <LocationFinder position={position} />
    </div >
  );
}

export default App;
