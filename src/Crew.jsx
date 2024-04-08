import useFetch from "./useFetch";
import CrewData from "./CrewData";

const Crew = () => {
    const {planets:crew} = useFetch("http://localhost:8000/crew");
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