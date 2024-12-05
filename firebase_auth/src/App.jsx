import React from 'react'
import Header from './components/header/Header'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
