import React, { useState } from 'react'

function Navbar() {
    const[isLangOpen,setLangOpen] = useState(false);
    const[isLoginOpen,setLoginOpen] = useState(false);
    const toggleLang = ()=>{
        setLangOpen(!isLangOpen)
    };
    const toggleLogin = ()=>{
        setLoginOpen(!isLoginOpen)
    }
  return <>
   <div>
    <div className='row nav-header py-4 text-white text-center bg-danger align-items-center gap-5'>
        <div className='fs-2 col-7 p-0'>ARTHUR <span className='fs-4'> Students Teacher Management</span></div>
        <div className='col-4'>
        <div className='row text-center gap-4'>
        <div className="col-5">
            <a className="nav-link dropdown-toggle border border-white border-2 rounded" href="#" onClick={toggleLang}>
                <span className="badge badge-danger badge-counter">Language</span>
            </a>
            <div className={`dropdown-menu shadow ${isLangOpen ? "show" : ""}`}>
                <h6 className="dropdown-header">
                    Choose Preffered Language
                </h6>
                <a className="d-flex align-items-center text-center" href="#" style={{ textDecoration: 'none' }}>
                    <div className="dropdown-item text-gray-500" onClick={toggleLang}>English(default)</div>
                </a>
                <a className="d-flex align-items-center text-center" href="#"style={{ textDecoration: 'none' }}>
                    <div className="dropdown-item text-gray-500" onClick={toggleLang}>Tamil</div>
                 </a>
            </div>
        </div>
        <div className="col-5">
            <a className="nav-link dropdown-toggle border border-white border-2 rounded" href="#" onClick={toggleLogin}>
                <span className="badge badge-danger badge-counter">Login/Logout</span>
            </a>
            <div className={`dropdown-menu shadow ${isLoginOpen ? "show" : ""}`}>
                <a className="d-flex align-items-center text-center" href="#" style={{ textDecoration: 'none' }}>
                    <div className="dropdown-item text-gray-500" onClick={toggleLogin}>Dashboard</div>
                </a>
                <a className="d-flex align-items-center text-center" href="#" style={{ textDecoration: 'none' }}>
                    <div className="dropdown-item text-gray-500" onClick={toggleLogin}>My Profile</div>
                </a>
                <a className="d-flex align-items-center text-center" href="#"style={{ textDecoration: 'none' }}>
                    <div className="dropdown-item text-gray-500" onClick={toggleLogin}>Logout</div>
                 </a>
            </div>
        </div>
        </div>
        </div>
    </div>
   </div>
  </>
}

export default Navbar