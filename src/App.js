import React,{useState} from 'react'
import Sidebar from './components/Sidebar';
import Mainboard from './loadpages.js/Mainboard';
import Addstud from './loadpages.js/Addstud';
import Addtech from './loadpages.js/Addtech';
import Allstud from './loadpages.js/Allstud';
import Allteach from './loadpages.js/Allteach';
import Feedback from './loadpages.js/Feedback';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Editstud from './loadpages.js/Editstud';
import Editteach from './loadpages.js/Editteach';
import Allstuteach from './loadpages.js/Allstuteach';
import Editstubyteach from './loadpages.js/Editstubyteach';
export const StudentContext = React.createContext();
export const TeacherContext = React.createContext();
function App() {
  const [studs,setstuds] = useState([]);
  const [teach,setteach] = useState([]);
  return <>
  <BrowserRouter>
  <Sidebar>
  <TeacherContext.Provider value={{teach,setteach}}>
  <StudentContext.Provider value={{studs,setstuds}}>
   <Routes>
    <Route path='*' element={<Mainboard />} />
    <Route path='/main-board' element={<Mainboard />} />
    <Route path='/add-students' element={<Addstud />} />
    <Route path='/add-teachers' element={<Addtech />} />
    <Route path='/all-students' element={<Allstud />} />
    <Route path='/all-teachers' element={<Allteach />} />
    <Route path='/all-studentsfrteachers' element={<Allstuteach />} />
    <Route path='/edit-students/:id' element={<Editstud />}/>
    <Route path='/edit-teachers/:id' element={<Editteach />}/>
    <Route path='/edit-studentsbyteachers/:id' element={<Editstubyteach />}/>
    <Route path='/feedback' element={<Feedback />} />
   </Routes>
   </StudentContext.Provider>
   </TeacherContext.Provider>
  </Sidebar>
  </BrowserRouter>
  </>
}

export default App;
