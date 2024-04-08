import useFetch from "./useFetch";
import TechData from "./TechData";


const Technology = () => {
    const {planets:tech} = useFetch("http://localhost:8000/technology");
    return ( 
        <>
        <div className="tech-bg"></div>
        <div className="Tech"> 
        {tech && < TechData tech = {tech}/>}
        </div>
        </>
     );
}
 
export default Technology;