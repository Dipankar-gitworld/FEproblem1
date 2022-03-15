import { useParams } from "react-router-dom";


function Success(){
    let { status,time,planet_name } = useParams();

    const handleClick = ()=>{
        window.location.href = "/"
    }
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h1>
            {status==="success"?"Success! Congratulation on Finding Falcone":"Could Not Find Falcone, Try finding on Different Planets"}

            </h1>
            <h3>Time taken: {time}</h3>
            {planet_name!=="undefined"?<h3>Planet found: {planet_name}</h3>:<h3>Planet found: not found</h3>}
            <div>
                <button onClick={handleClick}>Start Again</button>
            </div>
            

        </div>
    )
}


export default Success;