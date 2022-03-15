import "./FindFalcone.css"
import Destination from "./Destination";
import { useEffect, useState } from "react";

function FindFalcone() {
    let [planets, setPlanets] = useState([]);
    let [vechicles, setVechicles] = useState([]);
    let [totalTime, setTotalTime] = useState(0);
    let [selectedPlanet1, setSelectedPlanet1] = useState("")
    let [selectedPlanet2, setSelectedPlanet2] = useState("")
    let [selectedPlanet3, setSelectedPlanet3] = useState("")
    let [selectedPlanet4, setSelectedPlanet4] = useState("")
    let [selectedVechicle1, setSelectedVechicle1] = useState("");
    let [selectedVechicle2, setSelectedVechicle2] = useState("");
    let [selectedVechicle3, setSelectedVechicle3] = useState("");
    let [selectedVechicle4, setSelectedVechicle4] = useState("");
    let [errorDivFlag,setErrorDivFlag] = useState(false)
    let name1 = "spaceShip1";
    let name2 = "spaceShip2";
    let name3 = "spaceShip3";
    let name4 = "spaceShip4"



    useEffect(() => {
        fetch("https://findfalcone.herokuapp.com/planets")
            .then(res => res.json())
            .then(data => {
                setPlanets(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    useEffect(() => {
        fetch("https://findfalcone.herokuapp.com/vehicles")
            .then(res => res.json())
            .then(data => {
                setVechicles(data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const handleClick = () => {
        let obj = {};
        let arr = [selectedVechicle1, selectedVechicle2, selectedVechicle3, selectedVechicle4]
        for (let i = 0; i < 4; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]]++;
            }
        }
        // console.log(obj)
        if (obj["Space pod"]>2 || obj["Space rocket"]>1 || obj["Space shuttle"]>1 || obj["Space ship"]>2) {
            setErrorDivFlag(true);

        } else {
            fetch("https://findfalcone.herokuapp.com/token", {
                method: "POST",
                body: JSON.stringify(),
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    fetch("https://findfalcone.herokuapp.com/find", {
                        method: "POST",
                        body: JSON.stringify({
                            "token": data.token,
                            "planet_names": [
                                selectedPlanet1,
                                selectedPlanet2,
                                selectedPlanet3,
                                selectedPlanet4

                            ],
                            "vehicle_names": [
                                selectedVechicle1,
                                selectedVechicle2,
                                selectedVechicle3,
                                selectedVechicle4
                            ]
                        }),
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)

                            if (data.status === "success") {
                                window.location.href = `/find/${data.status}/${totalTime}/${data.planet_name}`;

                            } else {
                                window.location.href = `/find/${data.status}/${totalTime}/${data.planet_name}`;
                            }


                        })
                        .catch(err => {

                            // console.log(err)
                            window.location.href = "/error"
                        })

                })
                .catch(err => {
                    // console.log(err)
                    window.location.href = "/error"

                })
        }


    }

    // console.log("planets: ",planets);
    // console.log("vechicles: ",vechicles);

    return (
        <div className="main-body">
            <div>
                <h1>Select planets you want to search in:</h1>
                <div className="select-destination">
                    <Destination count="1" planets={planets} vechicles={vechicles} setSelectedVechicle={setSelectedVechicle1} setTotalTime={setTotalTime} name={name1} totalTime={totalTime} setSelectedPlanet={setSelectedPlanet1} />
                    <Destination count="2" planets={planets} vechicles={vechicles} setSelectedVechicle={setSelectedVechicle2} setTotalTime={setTotalTime} name={name2} totalTime={totalTime} setSelectedPlanet={setSelectedPlanet2} />
                    <Destination count="3" planets={planets} vechicles={vechicles} setSelectedVechicle={setSelectedVechicle3} setTotalTime={setTotalTime} name={name3} totalTime={totalTime} setSelectedPlanet={setSelectedPlanet3} />
                    <Destination count="4" planets={planets} vechicles={vechicles} setSelectedVechicle={setSelectedVechicle4} setTotalTime={setTotalTime} name={name4} totalTime={totalTime} setSelectedPlanet={setSelectedPlanet4} />
                    <div className="time-div">
                        <h3>Time Taken:{totalTime}</h3>
                    </div>
                </div>
                <div style={!errorDivFlag?{display:"none"}:{display:"block"}}><h2>Limited vehicles!! you can not use Space pod more than 2, Space rocket more than 1, Space shuttle more than 1 and Space ship more than 2. </h2></div>
                <div className="find-btn">
                    <button onClick={handleClick}>Find Falcone</button>

                </div>


            </div>



        </div>
    )
}

export default FindFalcone;