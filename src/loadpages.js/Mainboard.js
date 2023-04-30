import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {FaBook} from "react-icons/fa"
import Swal from 'sweetalert2'
function Mainboard() {
  const handleRegister = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Succesfully Registered!',
        text: 'You will get a call from our excecutive.'
    })
  }
  return <>
  <div className='p-3'>
    <div className='need-note mb-4'>
        <span><span className='fs-2' style={{marginLeft:"70px"}}>E</span>ffective teacher-student management is crucial for creating a positive and productive learning environment.
             It helps to establish clear expectations, build trust and respect, foster good communication, 
            and minimize disruptive behavior, ultimately leading to better academic outcomes and overall student success.Teacher-student management is not just about discipline,
             but it also involves creating a safe and inclusive environment where every student feels valued and supported. By effectively managing their relationships with students,
              teachers can motivate and engage them, address their individual needs, and promote their social and emotional development.
               Good teacher-student management can also enhance the teacher's job satisfaction and reduce their stress level,
             leading to a more fulfilling teaching experience. Ultimately, it's a critical aspect of effective teaching and learning that should not be overlooked.</span>
    </div>
    <div className='row py-4'>
    <div className='col-6'>
    <Card border="warning">
        <Card.Header>
          <Badge bg="warning">
             Welcome note!
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>Hello,Sir/Madam</Card.Title>
          <Card.Text>
            You are in the most loved and most used student-teacher management website, We frequently give updates to make your work here easier.
            The vibrant community behind this user-friendly and powerful website is always with you! Happy learning.
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
    <div className='col-6'>
    <Card border="dark">
        <Card.Header className='row'>
          <div className='col-5'>
          <Badge bg="dark">
             Upcoming Events!
          </Badge>
          </div>
          <div className='col-5'>
          <Badge bg="success">
             <a href='#' style={{ textDecoration: 'none',color:"white" }} onClick={handleRegister}>Register For Events</a>
          </Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div className='row'>
            <div className='col-3'><FaBook />------</div>
            <div className='col-9'> Interdisciplinary Studies(28.03.2023 11:AM)</div>
            </div>
            <div className='row'>
            <div className='col-3'><FaBook />------</div>
            <div className='col-9'> Pshycological Economics(29.03.2023 08:PM)</div>
            </div>
            <div className='row'>
            <div className='col-3'><FaBook />------</div>
            <div className='col-9'> Statistical Modelling(02.04.2023 11:AM)</div>
            </div>
            <div className='row'>
            <div className='col-3'><FaBook />------</div>
            <div className='col-9'> Mathematical Physics(02.04.2023 08:PM)</div>
            </div>
            <div className='row'>
            <div className='col-3'><FaBook />------</div>
            <div className='col-9'> Choice Theory by Dr William Glasser(05.04.2023 08:PM)</div>
            </div>
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </div>
    <div className='row py-4'>
    <div className='col-4'>
    <Card border="info">
        <Card.Header>
          <Badge bg="info">
             Why Arthur?
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Text className='p-2'>
            <li>Userfriendly Interface for faster completion of work</li>
            <li>Powerful severs for the data storage</li>
            <li>Dedicated team to approach any time during the day(24*5)</li>
            <li>Free events to upskill your knowledge</li>
            <li>Automated botes to fix your schedue and to take notes</li>
            <li>Special Community to link with like minded people</li>
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
    <div className='col-8'>
    <Card border="primary">
        <Card.Header>
          <Badge bg="primary">
             Testimonials
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div>I love this app! It has helped me to stay on top of my child's progress and communicate with their teacher easily.Highly recommend it!</div>
            <div style={{marginLeft:"30px"}}>----<b>Parent-1</b></div>
            <div>As a teacher, this app has made my life so much easier. I can easily share assignments and grades with my students and their parents. The app is user-friendly and I can access it from my phone or computer. Definitely a must-have for any teacher!</div>
            <div style={{marginLeft:"30px"}}>----<b>Teacher-1</b></div>
            <div>I've been using this app for a few weeks now and I'm really impressed. It's easy to use and has all the features I need to manage my classroom. The ability to send reminders and notifications to students has been particularly helpful. Highly recommend it to other teachers!</div>
            <div style={{marginLeft:"30px"}}>----<b>Teacher-2</b></div>
            <a className="dropdown-item text-center text-gray-500" href="#">See All Reviwes</a>
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </div>
   </div>
   <footer className="shadow" style={{background:"grey", opacity:"0.5"}}>
    <div className="py-3">
        <div className="text-center">
            <div>
                <span><b>Copyright &copy; Your Website 2021</b></span>
            </div>
        </div>
    </div>
    </footer> 
  </>
}

export default Mainboard