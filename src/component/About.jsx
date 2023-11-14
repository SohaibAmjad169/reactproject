import React from 'react';
import Common from './Common';
import im from "../images/9.jpg"


const About=()=> {
  return (
    <>
    <Common 
    name="Welcome to the About Page"
		imgsrc={im}
		visit="../Contact"
    btnname="Contact Now"
    />
    </>
  );
}

export default About;
