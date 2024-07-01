import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/layout'
import CarsList from '../components/partials/CarsList'
import NewCar from '../components/partials/NewCar'




export default function MyRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<CarsList />} />
          <Route path='/novo-carro' element={<NewCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}