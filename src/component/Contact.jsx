import React, { useState } from 'react';



const Contact=()=> {
  const[data,setDate]=useState({
    fname:'',
    number:'',
    email:'',
    massage:'',
  })
  const InputEvent=(event)=>{
    const {name,value}=event.target;

    setDate((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit=(e)=>{
 e.preventDefault();
 alert(`Name is ${data.fname} Phone Number is ${data.number} Form is Submitted`)
  }
  return (
    <>
     <div className='my-5 row'>
    <h1 className='text-center' >Contact US</h1>
  
  <div className="container-fluid">
        <div className="row ">
            <div className="col-lg-6 mx-auto">
            <form onSubmit={formSubmit}>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder='Enter Your Name '
          name='fname'
          value={data.fname}
          onChange={InputEvent}
          autocomplete="off"
          />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
    <input
				type="number"
				className="form-control"
				id="exampleInputEmail1"
				placeholder='Enter
				Your Phone Number'
				aria-describedby="emailHelp"
        name='number'
        value={data.number}
        onChange={InputEvent}
        autocomplete="off"
			/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					placeholder='Enter
					Your Email'
					aria-describedby="emailHelp"
          name='email'
          value={data.email}
          onChange={InputEvent}
          autocomplete="off"
				/>
  </div>
   <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Massage</label>
    <textarea
					name="massage"
					id="exampleInputEmail1"
					className="form-control"
          value={data.massage}
          onChange={InputEvent} 
          autocomplete="off"
				>
					
				</textarea>
    
  </div>
  <button type='submit' className="btn btn_submit">Submit</button>
</form>
            </div>
        </div>
   </div>
   </div>
    </>
  );
}

export default Contact;
