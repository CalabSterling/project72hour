import React, {useState, useEffect} from 'react';
import NASA from './NASA';


const LocationFinder = (props) => {
    
    return ( 
        <div>
            <NASA />
            {props.position.lat}
        </div>
     );
}
 
export default LocationFinder;