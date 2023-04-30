import React,{useState, useContext} from 'react';
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { StudentContext } from '../App';
import { Button } from 'react-bootstrap';
import Profile from './Profile';
import { useNavigate, useParams, } from 'react-router-dom';

function Editstud() {
    let navigate = useNavigate();
    let context = useContext(StudentContext)
    let params = useParams();

  const [name,setName] = useState(context.studs[params.id].name);
  const [cls,setCls] = useState(context.studs[params.id].cls);
  const [email,setEmail] = useState(context.studs[params.id].email);
  const [status,setStatus] = useState(false);

  const [prtname,setPrtname] = useState(context.studs[params.id].prtname);
  const [contact,setContact] = useState(context.studs[params.id].contact);

  const [assign,setAssign] = useState(context.studs[params.id].assign);
  const [done,setDone] = useState(context.studs[params.id].done);
  const [pending,setPending] = useState(context.studs[params.id].pending);

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
      context.studs.splice(params.id,1,data)
      navigate('/all-students')
    }
    
  }

  return <>
  <div className='p-3'>
  <div className='fs-1 mb-4'><b>Enter Details to Add the profile to the database :</b></div>
  <Form>
    <div className='row'style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div className='col-6' style={{width:"500px"}}>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Fullname" value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicClass">
      <Form.Label>Class</Form.Label>
      <Form.Control type="text" placeholder="Enter Class" value={cls} onChange={(e)=>setCls(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me for attendance (teachers only)" value={status} disabled onChange={(e)=>setStatus(e.target.checked)} />
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
      <Form.Control type="text" placeholder="Enter Fullname" value={prtname} onChange={(e)=>setPrtname(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicMobile">
      <Form.Label>Contact No.</Form.Label>
      <Form.Control type="number" placeholder="Enter Mobile.no" value={contact} onChange={(e)=>setContact(e.target.value)} />
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
      <Form.Control type="number" value={assign} disabled onChange={(e)=>setAssign(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicSubmit">
      <Form.Label>Submitted</Form.Label>
      <Form.Control type="number" value={done} disabled onChange={(e)=>setDone(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPending">
      <Form.Label>Pending</Form.Label>
      <Form.Control type="number" value={pending} disabled onChange={(e)=>setPending(e.target.value)}/>
    </Form.Group>
    </div>
  </div>
  </Form>
  </div>
</>
}

export default Editstud