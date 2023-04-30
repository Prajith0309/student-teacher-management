import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { TeacherContext } from '../App';
import Profile2 from './Profile2';


function Editteach() {
  let params = useParams();
  let context = useContext(TeacherContext);
  let navigate = useNavigate();

  const [name,setName] = useState(context.teach[params.id].name);
  const [email,setEmail] = useState(context.teach[params.id].email);
  const [incharge,setincharge] = useState(context.teach[params.id].incharge);


  const handleSubmit =(e)=>{
     console.log("hello")
      e.preventDefault();
      let data = {
        name,
        email,
        incharge
      }
      if(data.name === ""|| data.email ===""|| data.incharge === ""){
         window.alert("one or more fields empty!")
         return false;
      }else{
        
        context.teach.splice(params.id,1,data)
        navigate('/all-teachers')
      }
  }
  return <>
    <div className='p-3'  style={{height:"100vh",overflow:"scroll"}}>
    <div className='fs-1 mb-4'><b>Enter Details to Add the profile to the database :</b></div>
    <div className='py-5'></div>
    <div className='row'>
    <div className='col-6'>
    <Profile2 />
    </div>
    <Form  className='col-6'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter Class" value={incharge} onChange={(e)=>setincharge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Button variant="success" type="submit" className='mt-3' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
    </div>
    </Form>
    </div>
    </div>
  </>
}

export default Editteach