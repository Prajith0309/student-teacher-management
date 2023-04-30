import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import  {NavItem} from 'react-bootstrap' 
import Navbar from './Navbar';
import {FaBars, FaUserAlt, FaDatabase, FaRegComment} from "react-icons/fa"
import { NavLink} from 'react-router-dom';

function Sidebar({children}) {
  const[isOpen,setIsOpen] = useState(false);
  const toggleMore = (e)=>{
    e.preventDefault();
    console.log("clicked")
    setIsOpen(!isOpen)
  }
  const menuItem = [
    {
    path: "/main-board",
    name : "Welcome",
    icon: <FaDatabase />,
    },
    {
      path: "/add-students",
      name : "Students",
      icon: <FaUserAlt />,
    },
    {
        path: "/add-teachers",
        name : "Teachers",
        icon: <FaUserAlt />,
    },
    {
      path: "/feedback",
      name : "Feedback",
      icon: <FaRegComment />,
    }
  ]
  return <>
   
    <div className='sidefixed row'> 
       <div className={`bg-danger border border-dark border-1 sidebar ${isOpen ? 'col-1' : 'col-2'}`} style={{paddingRight: "0px"}}>
        <div className='topper'>
          <h1 className='logo' style={{display: isOpen ? "none" : "block"}}>Home</h1>
          <a style={{marginLeft: isOpen ? "0px" : "50px"}} className={`more ${isOpen ? 'mb-4' : ''}`} href="#">
            <FaBars style={{fontSize: isOpen?"27px":""}} onClick = {toggleMore} />
          </a>
        </div>
        {
          menuItem.map((item,i)=>(
            <NavItem>
             <NavLink to={item.path} key={i} className="link align-center" style={{ textDecoration: 'none' }} activeClassName = "active">
               <div className='icon' style={{marginLeft: isOpen ? "33px" : "30px"}}>
                {item.icon}
               </div>
               <div style={{display: isOpen ? "none" : "block"}} className={`link-text ${isOpen ? "text-center" : ''}`}>
                {item.name}
               </div>
             </NavLink>
            </NavItem>
          ))
        }
       </div>
       <main className={`${isOpen ? 'col-11 p-0' : 'col-10 p-0'}`}>
        <Navbar />
        {children}
       </main>
    </div>
  </>
}

export default Sidebar