import "./Planet.css"

function Planet({name,distance}){
    console.log(name,distance)
    return (
        <div className="planet-div" style={{color:"white", textAlign:"center"}}>
            <h1>Planet Name:</h1>
            <h2 style={{color:"	#bf9424"}}>{name}</h2>
            <h1>Distance:</h1>
            <h2 style={{color:"	#bf9424"}}>{distance} megamiles</h2>
            

        </div>
    )
}

export default Planet;