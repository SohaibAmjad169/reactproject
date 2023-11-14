import React from "react";
import im from "../images/11-removebg-preview.png"
import Common from "./Common";

const Home =()=>{
    return(
        <>
       <Common
		name="Grow Your Bussiness with"
		imgsrc={im}
		visit="./Service"
        btnname="Get Started"
        />
        </>
    )
}

export default Home;