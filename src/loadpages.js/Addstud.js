import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../App';
import Profile from './Profile';




function Addstud() {
  let context = useContext(StudentContext);
  let navigate = useNavigate();

  const [name,setName] = useState("");
  const [cls,setCls] = useState("");
  const [email,setEmail] = useState("");
  const [status,setStatus] = useState(false);

  const [prtname,setPrtname] = useState("");
  const [contact,setContact] = useState("");

  const [assign,setAssign] = useState(0);
  const [done,setDone] = useState(0);
  const [pending,setPending] = useState(0);

  const handlestudlist = (e)=>{
    e.preventDefault();
    navigate('/all-students')
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let data = {
      name,
      cls,
      email,
      status,
      prtname,
      contact,
      assign,
      done,
      pending
    }
    if(data.name === "" || data.cls ==="" || data.email ==="" || data.prtname ===""|| data.contact===""){
      window.alert("one or more fields empty!")
      return false;
    }else{
      console.log(context)
      console.log(data)
      context.setstuds([...context.studs,data])
      navigate('/all-students')
    }
    
  }
  return <>
    <div className='p-3'>
    <div className='fs-1 mb-4'><b>Enter Details to Add the profile to the database :<Button className='bg-dark' style={{marginLeft:"140px"}} onClick={handlestudlist}>List Data</Button></b></div>
    <Form>
      <div className='row'style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className='col-6' style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter Class" onChange={(e)=>setCls(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me for attendance (teachers only)" disabled onChange={(e)=>setStatus(e.target.checked)} />
      </Form.Group>
      </div>
      <div className='col-6' style={{width:"500px"}}>
      <Profile />
      </div>
      </div>
      <div className='row mt-4' style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className='col-6' style={{width:"500px"}}>
      <Form.Text>
        <b>PARENT DETAILS</b>
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Parent Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname" onChange={(e)=>setPrtname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile.no" onChange={(e)=>setContact(e.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit" className='mt-3' onClick={handleSubmit}>
        Submit
      </Button>
      </div>
      <div className='col-6' style={{width:"500px"}}>
      <Form.Text>
       <b> ASSESMENTS DETAILS (Teachers Only)</b>
      </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicAssign">
        <Form.Label>Assigned</Form.Label>
        <Form.Control type="number" disabled onChange={(e)=>setAssign(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubmit">
        <Form.Label>Submitted</Form.Label>
        <Form.Control type="number" disabled onChange={(e)=>setDone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPending">
        <Form.Label>Pending</Form.Label>
        <Form.Control type="number" disabled onChange={(e)=>setPending(e.target.value)}/>
      </Form.Group>
      </div>
    </div>
    </Form>
    </div>
  </>
}

export default Addstud