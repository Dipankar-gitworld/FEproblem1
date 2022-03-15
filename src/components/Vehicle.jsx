import { useEffect, useState } from "react";
import VehicleBox from "./VehicleBox";

function Vehicle(){
    let [vechicles, setVechicles] = useState();

    useEffect(() => {
        fetch("https://findfalcone.herokuapp.com/vehicles")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVechicles(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Vehicles List</h1>
            <div style={{display:"flex",gap: "40px", justifyContent:"space-around",marginBottom:"40px"}}>
               <VehicleBox name={vechicles?vechicles[0].name:null} max_distance={vechicles?vechicles[0].max_distance:null} speed={vechicles?vechicles[0].speed:null} total_no={vechicles?vechicles[0].total_no:null} />
               <VehicleBox name={vechicles?vechicles[1].name:null} max_distance={vechicles?vechicles[1].max_distance:null} speed={vechicles?vechicles[1].speed:null} total_no={vechicles?vechicles[1].total_no:null} />
               <VehicleBox name={vechicles?vechicles[2].name:null} max_distance={vechicles?vechicles[2].max_distance:null} speed={vechicles?vechicles[2].speed:null} total_no={vechicles?vechicles[2].total_no:null} />
               <VehicleBox name={vechicles?vechicles[3].name:null} max_distance={vechicles?vechicles[3].max_distance:null} speed={vechicles?vechicles[3].speed:null} total_no={vechicles?vechicles[3].total_no:null} />
            </div>
            
        </div>
    )
}

export default Vehicle;