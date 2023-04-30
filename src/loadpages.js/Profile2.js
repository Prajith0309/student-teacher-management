import React from 'react';
import img from './images/Teacher.jpg'
function Profile2() {
  return <>
    <div className='Profile_img text-center p-4'>
        <div className='flex justify-content-center align-items-center'>
            <img style={{
                width:"200px",
                height:"200px",
                borderRadius:"50%",
                objectFit:"cover",
            }}
            src={img} alt=""/>
            <div><b>Default Profile For</b></div>
            <div><b>students</b></div>
        </div>
      </div>
  </>
}

export default Profile2