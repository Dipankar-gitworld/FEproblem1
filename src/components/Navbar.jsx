import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return (
        <div className="nav-div">
            <div className="main-nav-div">
                <Link style={{textDecoration:"none", color:"white"}} to="/"><h3>Finding Falcone</h3></Link>
                
                <div>
                    <Link style={{textDecoration:"none", color:"white"}} to="/hideouts" ><h3 >Potential Hideouts</h3></Link>
                    <Link style={{textDecoration:"none", color:"white"}} to="/vehicles" ><h3>Available Vehicles</h3></Link>
                    
                    
                </div>
                

            </div>

        </div>
    )
}

export default Navbar;