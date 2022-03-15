import { useEffect, useState } from "react";
import "./Destination.css";

function Destination({count,planets,vechicles,setTotalTime,name,totalTime,setSelectedPlanet,setSelectedVechicle }){
    let [ flag, setFlag ] = useState(false);
    let [ val,setValue] = useState();
    let [ shipval,setshipValue] = useState();
    // let [optionFlag,setOptionFlag] = useState(false)
    let [time,setTime] = useState(0)
    // let [remove,setRemove] = useState()

    const handleSelect = (el)=>{
        
       
        console.log((el.target.value))
        planets.forEach(element =>{
            if(el.target.value===element.name){
                setValue(element);
                
            }

        })

        
        
        
        setFlag(true);


    }

    // console.log(selectedPlanets)

    // const handleClick = ()=>{
    //     let newPlanets = planets.filter(el => {
    //         let flag = false;
    //         selectedPlanets.forEach(element =>{
    //             if(el.name===element){
    //                 flag = true;
    //             }
    //         })
    //         if(flag){

    //         }else{
    //             return el;
    //         }
    //     })
    //     setPlanets(newPlanets);
    // }
    
    useEffect(()=>{
        
        // if(val){
        //     // setRemove(val.name);

        //     setSelectedPlanets(prev=>{
                
        //         return [...prev,val.name]

        //     });

        // }

        if(val){
            setSelectedPlanet(val.name);
        }

        if(shipval){
            // console.log(val.distance,shipval.speed)
            setTime(prev=>{
                setTotalTime(totalTime-prev);
                
                return (val.distance/shipval.speed);
            })
        }

    },[val])

    useEffect(()=>{
        
        setTotalTime(prev=>{
            // console.log(prev,time)
            return prev+time;
        })

    },[time])

   
   
    
    

    const handleChange = (el)=>{
        // console.log(val.distance,el.speed)
        setTime(prev=>{
            setTotalTime(totalTime-prev);
            setshipValue(el);
            return (val.distance/el.speed);
        })
        setSelectedVechicle(el.name);
        
    }    
    return (
        <div className="destination-div">
            <h4>Destinatuion {count}</h4>
            <select    onChange={ handleSelect} >
                <option >{val?val.name:"select"}</option>
                {
                    planets.map(el =>{
                        return (
                            <option key={el.distance} value={el.name}  >{el.name}</option>
                        )
                    })
                }
                
                
            </select>
            
            <div  style={flag?{display:"block"}:{display:"none"}}>
                {
                    vechicles.map(el =>{
                        
                        return (
                            <div key={el.max_distance}>
                                <input disabled={val?el.max_distance<val.distance:false}  type="radio" name={name} value={el.name} id={el.name} onChange={()=>{
                                    handleChange(el);
                                }} />
                                <label >{el.name}({el.total_no})</label>
                                <br />

                            </div>
                            
                        )
                    })
                }
                
            </div>

        </div>
    )
}

export default Destination;