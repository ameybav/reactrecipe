import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipie from './Recipie'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cuisine/:type' element={< Cuisine/>}></Route>
            <Route path='/searched/:search' element={<Searched/>}></Route>
            <Route path='/recipie/:value' element={<Recipie/>}></Route>
        </Routes>
    </div>
  )
}

export default Pages