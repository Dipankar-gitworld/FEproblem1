import React from "react";
import Navbar from "./Navbar";
import FindFalcone from "./FindFalcone";
import Errorpage from "./ErrorPage";
import { Routes,Route } from "react-router-dom";
import Success from "./SuccessPage";
import Hideout from "./Hideout";
import Vehicle from "./Vehicle";

function Home(){

   

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<FindFalcone />}></Route>
                <Route path="/error" element={<Errorpage />}></Route>
                <Route path="/find/:status/:time/:planet_name" element={<Success />}></Route>
                <Route path="/hideouts" element={<Hideout />}></Route>
                <Route path="/vehicles" element={<Vehicle />}></Route>
            </Routes>
            
            
         
        </div>
       
    )
}

export default Home;