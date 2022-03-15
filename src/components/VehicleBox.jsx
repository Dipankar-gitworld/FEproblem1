import "./VehicleBox.css"

function VehicleBox({ name, max_distance, speed, total_no}){
    // console.log(name,distance)
    return (
        <div className="vehicle-div" style={{color:"white", textAlign:"center"}}>
           <h1>Name</h1>
           <h3 style={{color:"	#bf9424"}}>{name}</h3>
           <h1>Max-distance</h1>
           <h3 style={{color:"	#bf9424"}}>{max_distance} megamiles</h3>
           <h1 >Speed</h1>
           <h3 style={{color:"	#bf9424"}}>{speed} megamiles/hr</h3>
           <h1>Total No.</h1>
           <h3 style={{color:"	#bf9424"}}>{total_no}</h3>
            

        </div>
    )
}

export default VehicleBox;