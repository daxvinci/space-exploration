
// import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Destination from "./Destination";

const DestiantionData = () => {
    // const {id} = useParams();
    const {planets} = useFetch("http://localhost:8000/destinations");
    
    return ( 
        <>
        <div className="dest-bg"></div>
        <div className="destination">
        <div className="pick"> <span> 01 </span> PICK YOUR DESTINATION </div>
        {planets && < Destination planets = {planets}/>}
        </div>
        </>
    )
    
}
 
export default DestiantionData;