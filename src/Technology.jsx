// import useFetch from "./useFetch";
import techJson from "./technJson";
import TechData from "./TechData";


const Technology = () => {
    const tech = techJson;
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