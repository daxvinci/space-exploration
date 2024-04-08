import { useState } from "react";


const TechData = ({tech}) => {
    const [selectedTech, setSelectedTech] = useState(tech[0]);
    console.log(selectedTech)

    const handleTech = (clickedTech) => {
        setSelectedTech(clickedTech)
    }

    return ( 
        <>
        <main className="destination-tech" key = {selectedTech.id}>
        <div className="left-tech">
        <div className="launch"><span>03 </span>SPACE LAUNCH 101</div>
        <div className="tech-summ">
            <div className="numbers">
                <div onClick={()=> {handleTech(tech[0])}} className={selectedTech.name.toUpperCase() === "LAUNCH VEHICLE" ? "active-tech number" : "number"}>1</div>
                <div onClick={()=> {handleTech(tech[1])}} className={selectedTech === tech[1] ? "active-tech number" : "number"}>2</div>
                <div onClick={()=> {handleTech(tech[2])}} className={selectedTech === tech[2] ? "active-tech number" : "number"}>3</div>
            </div>
          <div className="tech-details">
            <div className="terminology">THE TERMINOLOGY...</div>
            <div className="tech-name"> {selectedTech.name.toUpperCase()}</div>
            <div className="tech-description"> {selectedTech.description}</div>
          </div>
        </div>
        </div>
        <img className="tech-img" src={selectedTech.images.portrait} alt={selectedTech.name}/>
    </main>
    </>    
     );
}
 
export default TechData;