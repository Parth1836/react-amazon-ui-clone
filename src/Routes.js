import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'

function MainRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />{" "}
      <Route exact path="/dashboard" element={<Dashboard />} />{" "}
      </Routes>
      </BrowserRouter>
  )
};

export default MainRoutes;
