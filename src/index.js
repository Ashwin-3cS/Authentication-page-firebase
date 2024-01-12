import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";
// import { createRoot } from 'react-dom/client';


import App from "./App.js";

import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Protected from './components/Protected.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx'; // Replace with the correct path to Home component


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<App/>}>
      <Route path="signup" element ={<Signup/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="/" element ={<Protected/>}>
        <Route path="/" index element={<Home/>}/>
      </Route>
    </Route>
  )
);

// Replace this line
// const root = ReactDOM.createRoot(document.getElementById('root'));

// With this line
ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

