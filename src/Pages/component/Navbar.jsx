import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/"></Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link style={{fontSize:'30px',fontWeight:"500"}} className="nav-link active" aria-current="page" to="/"><IoFastFoodOutline size={"40px"}/>Recipe Website</Link>
        </li>
    
      </ul>
    
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
