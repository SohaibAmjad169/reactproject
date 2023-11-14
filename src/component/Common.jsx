import React from "react";
import { Link } from "react-router-dom";


const Common =(props)=>{
    return(
        <>
       <section id="Header" className="">
       <div className="container-fluid">
        <div className="row ">
            <div className="col-lg-10 mx-auto">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 pt-6 pt-lg-0 order-2 order-lg-1 p1" >
                         <h1>{props.name} <br /><strong className="brand_name"> OUR COMPANY</strong></h1>
                         <h2 className="my-3">We Have a Team of Talented Developer Making Website </h2>
                         <div className="mt-4">
                            <Link to={props.visit} className="btn-get-started"> {props.btnname} </Link>
                         </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img p2">
                            <img src={props.imgsrc} alt="home img" className="img-fluid animated" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
        </>
    )
}

export default Common;