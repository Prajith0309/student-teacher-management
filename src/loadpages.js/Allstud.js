import React,{useContext} from 'react';
import { StudentContext } from '../App';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import img from './images/profile.webp'
import { FaEdit } from 'react-icons/fa';
function Allstud() {
  let context = useContext(StudentContext);
  let navigate = useNavigate();
  const handleclick = (e)=>{
      e.preventDefault();
      navigate('/add-students');
  }
  
  return <>
   <div className='allstudent' style={{height:"100vh",overflow:"scroll"}}>
    <div className='p-2'>
     <div className='fs-1'><b>Students Data:</b></div>
     <Button onClick={handleclick}>Add Students</Button>
     
     {
      context.studs.map((e,i)=>{
        return<>
         <div className="inner m-5" key={i}>
          <div className="next border border-dark border-3">
           <div className="row">
             <div className="col-3">
               <h1><img style={{
                      width:"200px",
                      height:"200px",
                      borderRadius:"50%",
                      objectFit:"cover",
                    }}
                  src={img} alt=""/></h1>
             </div>
            <div className="col-9"style={{display:"grid", gridTemplateRows:"85% 15%"}}>
          <div className="row">
            <div className="col-6">
             <h4>Full Name:{e.name}</h4>
             <h4>Class    :{e.cls}</h4>
             <h4>Email    :{e.email}</h4>
            </div>
            <div className="col-6">
             <h4>Parent Name:{e.prtname}</h4>
             <h4>Contact No:{e.contact}</h4>
             <h4>Attendence:-------</h4>
            </div>
          </div>
          <div className='row text-center'>
            <span className='col-3'><b>{e.assign}</b>{`  Asignments`}</span>
            <span className='col-3'><b>{e.done}</b>{`  Submitted`}</span>
            <span className='col-3'><b>{e.pending}</b>{`  Pending`}</span>
            <span className='col-3'><a href='#' onClick={()=>navigate('/edit-students/'+i)}><FaEdit /></a></span>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
        
      })
     }
   </div>
   </div>
  </>
}

export default Allstud