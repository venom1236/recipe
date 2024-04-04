import logo from './logo.svg';
import './App.css';
import  {BrowserRouter, Routes, Route, useHref} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './Pages/component/Navbar';
import { useState } from 'react';
import SingleRecipe from './Pages/SingleRecipe';

function App() {



 




  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>

     <Route path='/'element={<Home   />}/>
     <Route path='/login'element={<Login />}/>
     <Route path='/signup'element={<SignUp />}/>
     <Route path='/single'element={<SingleRecipe />}/>


     </Routes>
     
     
    
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
