import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TeacherContext } from '../App';
import Profile2 from './Profile2';


function Addtech() {

  let context = useContext(TeacherContext);
  let navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [incharge,setincharge] = useState("");

  const handleteachlist =(e)=>{
    e.preventDefault();
    navigate('/all-teachers')
  }
  const handlestudclick =(e)=>{
    e.preventDefault();
    navigate('/all-studentsfrteachers')
  }
  const handleSubmit =(e)=>{
     console.log("hello")
      e.preventDefault();
      let data = {
        name,
        incharge,
        email
      }
      if(data.name === ""|| data.email ===""|| data.incharge === ""){
         window.alert("one or more fields empty!")
         return false;
      }else{
        context.setteach([...context.teach,data])
        navigate('/all-teachers')
      }
  }
  return <>
    <div className='p-3'  style={{height:"100vh",overflow:"scroll"}}>
    <div className='fs-1 mb-4'><b>Enter Details to Add the profile to the database :<Button className='bg-dark' style={{marginLeft:"140px"}} onClick={handleteachlist}>List Data</Button></b></div>
    <div className='py-5'></div>
    <div className='row'>
    <div className='col-6'>
    <Profile2 />
    <div className='text-center mt-4'>
    <Button onClick={handlestudclick}>Student Data</Button>
    </div>
    </div>
    <Form  className='col-6'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter Class" onChange={(e)=>setincharge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
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

export default Addtech