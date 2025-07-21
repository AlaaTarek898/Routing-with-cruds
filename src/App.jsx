
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import './App.css'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home' 
import About from './pages/About/About';
import Portofolio from './pages/Portofolio/Portofolio';
import Contact from './pages/Contact/Contact';

 function App() {
 const routes=createBrowserRouter([ 
    {path: "/",element:<Layout/> , children:[  
      {path: "/home",element:<Home/> },
      {path: "/about",element:<About/> },
      {path: "/portofolio",element:<Portofolio/> },
      {path: "/contact",element:<Contact/> },] },

    ],)
  
  

  return (
    <RouterProvider router={routes}/>

  )
}

export default App
