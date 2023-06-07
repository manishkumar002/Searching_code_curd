import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Register from './Components/Register';
import ShowUser from './Components/ShowUser';
import Update from './Components/Update';
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/show' element={<ShowUser/>}/>
        <Route path='/update' element={<Update/>}/>
        
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;