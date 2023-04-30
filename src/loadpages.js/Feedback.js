import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
function Feedback() {
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [feedback,setFeedback] = useState("");
 const handleSubmit =(e)=>{
   e.preventDefault();
   let data ={
    name,
    email,
    feedback
   }
   if(data.name === ""|| data.email ===""|| data.feedback ===""){
        window.alert("one or more fields empty!")
         return false;
   }else{
    document.querySelector('#name').value ="";
    document.querySelector('#email').value ="";
    document.querySelector('#feedback').value ="";
    Swal.fire('Yuor feedback submitted!')
   }
   
 }

  return<>
   <div>
    <Form className='p-4' style={{height:"100vh",overflow:"scroll"}}>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="eg.,Jhon doe" id="name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" id="email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} id="feedback" onChange={(e)=>setFeedback(e.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit" className='mt-3' onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default Feedback