import React from 'react';
import Card from "./Card";
import sData from './Sdata';

function Service() {
  return (
    <>
  <div className='my-5'>
    <h1 className='text-center'>Our Services</h1>
  </div>
  <div className="container-fluid">
        <div className="row ">
            <div className="col-lg-10 mx-auto">
              <div className="row gy-4">
              {
                sData.map((val,ind)=>{
                  return <Card key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  />
                })
              }
              </div>
            </div>
        </div>
  </div>
    </>
  );
}

export default Service;
