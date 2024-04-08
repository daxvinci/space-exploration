import { useState } from "react";

const CrewData = ({crew}) => {
    const [crewMember, setCrewMember] = useState(crew[0]); // Initially select the first planet
    console.log(crewMember);
    const handleCrew = ((selectedCrew) => {
        setCrewMember(selectedCrew);
    });

    // useEffect(() => {
        
    //     if (crewMember === crew[0]) {
    //         let firstSpan = document.querySelector(".first");
    //         firstSpan.classList.add("active-crew");
    //     }
    // }, [crew,crewMember]);

    return (
        <>
            <main className="destination-crew" key = {crewMember.id}>
            <div className="left-crew">
                <div className="meet"><span>02 </span>Meet your crew</div>
                {/* <ul className = "crewlist">
                    <li   onClick={()=>{handleCrewSelect(crew[0])}}><a href="#commander" id='commander' className={crewMember === crew[0] ? " crew active" : " crew "}>commander</a></li>
                    <li   onClick={()=>{handleCrewSelect(crew[1])}}><a href='#specialist' id='specialist' className={crewMember === crew[1] ? " crew active" : " crew "}>mission specialist</a></li>
                    <li   onClick={()=>{handleCrewSelect(crew[2])}}><a href='#pilot' id='pilot' className={crewMember === crew[2] ? " crew active" : "crew "}>pilot</a></li>
                    <li   onClick={()=>{handleCrewSelect(crew[3])}}><a href='#engineer' id='engineer' className={crewMember === crew[3] ? " crew active" : " crew "}>flight engineer</a></li>
                </ul> */}
                <div className="crew-role">{crewMember.role.toUpperCase()}</div>
                <div className="crew-name"> {crewMember.name.toUpperCase()}</div>
                <div className="crew-description">  
                    {crewMember.bio}
                </div>
                <div className="sliders">
                    <span onClick={()=> {handleCrew(crew[0])}} className={crewMember.name.toUpperCase() === "DOUGLAS HURLEY" ? "active-crew slider" : "slider"}></span>
                    <span onClick={()=> {handleCrew(crew[1])}} className={crewMember === crew[1] ? "active-crew slider" : "slider"}></span>
                    <span onClick={()=> {handleCrew(crew[2])}} className={crewMember === crew[2] ? "active-crew slider" : "slider"}></span>
                    <span onClick={()=> {handleCrew(crew[3])}} className={crewMember === crew[3] ? "active-crew slider" : "slider"}></span>
                </div>
            </div>
            <hr />
            <img className="crew-img" src={crewMember.images.png} alt={crewMember.name}/>
        </main>
        </>    
    );
}
 
export default CrewData;