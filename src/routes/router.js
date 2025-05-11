import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "../pages/Services";


function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Services />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router