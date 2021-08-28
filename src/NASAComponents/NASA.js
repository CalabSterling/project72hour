import React, {useState, useEffect} from 'react';
import {} from 'reactstrap';

let day = new Date();
var dd = String(day.getDate()).padStart(2, '0');
var mm = String(day.getMonth() + 1).padStart(2, '0'); 
var yyyy = day.getFullYear();
let date = `${yyyy}-${mm-1}-${dd}`
console.log(date)

const NASA = (props) => {
    const [submit, setSubmit] = useState([]);
    
    const key = 'Z7E5A8YqjoP6Gw65BfND2d2jnsypTLPDtQqYLDGs';
    let long = props.position.lon;
    let lat = props.position.lat;
    let url = `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${date}&api_key=${key}`
    //https://api.nasa.gov/planetary/earth/assets?lon=-86.262860&lat=39.751219&date=2020-08-21&api_key=Z7E5A8YqjoP6Gw65BfND2d2jnsypTLPDtQqYLDGs
    
    
    useEffect(() => {
        const fetchURL = async() => {
            const response = await fetch(url);
            const data = await response.json();
            setSubmit(data.url)
        };
        fetchURL();
    }, [url]);
   

    return ( 
        <div>
                <div className="nasaPic">
                    <img src={submit} style={{width: "120px", height: "200px"}}></img>
                </div>
        </div>
     );
}
 
export default NASA;