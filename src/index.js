import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Pages/Home.js';
import Navbar from './Components/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Navbar/>
<div className="container mt-4">
<App/>
</div>
</BrowserRouter>

);
