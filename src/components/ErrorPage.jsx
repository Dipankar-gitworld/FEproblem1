


function Errorpage(){
    const handleClick = ()=>{
        window.location.href = "/"
    }
    return (
        <div style={{display:"flex", flexDirection:"column" , justifyContent:"center", alignItems:"center" }}>
            <h1>404 not found</h1>
            <div>
                <button onClick={handleClick} >search again</button>
            </div>
        </div>
    )
}

export default Errorpage;