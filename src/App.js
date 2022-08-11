
import React,{Fragment} from 'react';
import { Routes,Route } from "react-router-dom";

//Pages
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';
import Cines from './Pages/Cines.js';
import NotFound from './Pages/NotFound.js';
import Loggin from './Components/Loggin.js';
import Register from './Components/Register.js';
function App() {
  return (
    <Routes>
    <Route path="Home" element={ <Home/> } />
    <Route path="Contact" element={ <Contact/>}/>
    <Route path="Cines" element={ <Cines/> } />
    <Route path="*" element={ <NotFound/> } />
    <Route path="Loggin" element={ <Loggin/> } />
    <Route path="Register" element={ <Register/> } />
    </Routes>
  );
}

export default App;
