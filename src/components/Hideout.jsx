import { useEffect, useState } from "react";
import Planet from "./Planet";


function Hideout(){
    let [ planets, setPlanets] = useState()

    useEffect(() => {
        fetch("https://findfalcone.herokuapp.com/planets")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlanets(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Potential Hideouts of Falcone</h1>
            <div style={{display:"flex",gap: "40px", justifyContent:"space-around",marginBottom:"40px"}}>
                <Planet name={planets?planets[0].name:null} distance={planets?planets[0].distance:null} />
                <Planet name={planets?planets[1].name:null} distance={planets?planets[1].distance:null} />
                <Planet name={planets?planets[2].name:null} distance={planets?planets[2].distance:null} />

            </div>
            <div style={{display:"flex",gap: "40px", justifyContent:"space-around"}}>
                <Planet name={planets?planets[3].name:null} distance={planets?planets[3].distance:null} />
                <Planet name={planets?planets[4].name:null} distance={planets?planets[4].distance:null} />
                <Planet name={planets?planets[5].name:null} distance={planets?planets[5].distance:null} />

            </div>

        </div>
    )
}

export default Hideout;