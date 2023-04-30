import React,{useContext} from 'react';
import { TeacherContext } from '../App';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import img from './images/Teacher.jpg'
import { FaEdit } from 'react-icons/fa';

function Allteach() {
  let context = useContext(TeacherContext);
  let navigate = useNavigate();
  const handleclick = (e)=>{
   e.preventDefault();
   navigate('/add-teachers')
  }
  return <>
   <div className='allteachers' style={{height:"100vh",overflow:"scroll"}}>
    <div className='p-2'>
     <div className='fs-1'><b>Teachers Data:</b></div>
     <Button onClick={handleclick}>Add Data</Button>
     {
      context.teach.map((e,i)=>{
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
            <div className="col-9" style={{display:"grid", gridTemplateRows:"70% 30%"}}>
              <div className='row text-center align-items-center'>
              <span className='col-3 fs-4'>NAME:<b>{e.name}</b></span>
              <span className='col-3 fs-4'>CLASS:<b>{e.incharge}</b></span>
              <span className='col-6 fs-4'>EMAIL:<b>{e.email}</b></span>
              </div>
              <div className='text-center'>
              <span className='col-6 fs-1 align-items-center'><a href='#' onClick={()=>navigate('/edit-teachers/'+i)} style={{textDecoration:"none"}}>Edit<FaEdit /></a></span>
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

export default Allteach