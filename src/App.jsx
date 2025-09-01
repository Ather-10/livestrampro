import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/room/:roomID' element ={<Room/>}/>
      <Route path='/rooom' element ={<App/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App