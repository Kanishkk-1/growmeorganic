import React from 'react'
import ReactDOM from 'react-dom'
import Firstpage from './Firstpage'
import Third from './Third'
import { BrowserRouter  , Route, Routes } from 'react-router-dom'
import Secondpage from './Secondpage'
import Check from './Check'
import './index.css'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/second-page" element={<Secondpage />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
