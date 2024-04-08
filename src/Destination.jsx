import React, { useState,useEffect } from 'react';
import './destination.css';



const Destination = ({planets}) => {

    const [selectedPlanet, setSelectedPlanet] = useState(planets[0]); // Initially select the first planet

    
    useEffect(() => {
        // Check if the page is refreshed and apply the border-bottom to the "Moon" link
        const moonLink = document.getElementById('moon');
        const currentUrl = window.location.href;
        if (currentUrl.includes('#moon') && moonLink) {
            moonLink.classList.add('active');
        }
    }, []);
    // Function to handle planet selection
    const handlePlanetSelect = (planet) => {
        setSelectedPlanet(planet);
    };
   
    return (
        <>
            <main className="destination-main" key = {selectedPlanet.id}>
            <img src={selectedPlanet.images.png} alt={selectedPlanet.name} height="380px" width="380px"/>
            <div className="right-dest">
                <ul className="mini-nav">
                    <li   onClick={()=>{handlePlanetSelect(planets[0])}}><a href="#moon" id='moon' className={selectedPlanet.name.toUpperCase() === "MOON" ? " planet active" : " planet "}>MOON</a></li>
                    <li   onClick={()=>{handlePlanetSelect(planets[1])}}><a href='#mars' id='mars' className={selectedPlanet === planets[1] ? " planet active" : " planet "}>MARS</a></li>
                    <li   onClick={()=>{handlePlanetSelect(planets[2])}}><a href='#europa' id='europa' className={selectedPlanet === planets[2] ? " planet active" : " planet "}>EUROPE</a></li>
                    <li   onClick={()=>{handlePlanetSelect(planets[3])}}><a href='#titan' id='titan' className={selectedPlanet === planets[3] ? " planet active" : " planet "}>TITAN</a></li>
                </ul>
                <div className="title"> {selectedPlanet.name.toUpperCase()}</div>
                <div className="description">  
                    {selectedPlanet.description}
                </div>
                < hr />
                <div className="averages">
                    <div className="avg-distance stats">
                        <p className="first-p"> AVG. DISTANCE</p>
                        <p className="p2">{selectedPlanet.distance.toUpperCase()}</p>
                    </div>
                    <div className="travel-time stats">
                        <p className="first-p"> EST. TRAVEL TIME</p>
                        <p className="p2">{selectedPlanet.travel.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </main>
        </>    
    );
    
}
 
export default Destination;