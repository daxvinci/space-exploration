// import useFetch from "./useFetch";
import crewJson from "./crewJson";
import CrewData from "./CrewData";

const Crew = () => {
    const crew = crewJson;
    return ( 
        <>
        <div className="backg"></div>
        <div className="crew"> 
        {crew && < CrewData crew = {crew}/>}
        </div>
        </>
     );
}
 
export default Crew;