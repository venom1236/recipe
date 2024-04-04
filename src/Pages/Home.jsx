import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  
  let searchRef=useRef()
  const[value,setvalue]=useState([])
  const[search,setsearch]=useState('shake')
  console.log(search)
  
async function fetchRecipe(){

  let res=await fetch(`https://api.edamam.com/search?q=${search}&app_id=56d5db59&app_key=ae4096870bc64162f257f9e11985781f`)

  let data=await res.json()
  
  console.log(data.hits)
  setvalue(data.hits)
  

}
useEffect(()=>{
  fetchRecipe()
},[search])

const hendlesearch=(e)=>{
  e.preventDefault()
  let searchValue=searchRef.current.value
  setsearch(searchValue)
  console.log(searchValue)
}








  return (
<div>

<form className="d-flex w-50 p-3 m-auto mt-3 mb-3" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={searchRef}/>
  <button onClick={hendlesearch} className="btn btn-outline-success" type="submit">Search</button>
</form>



<div className='row row-cols-3 gap-2 d-flex justify-content-center'>
       {value.map((ele)=>{
    return <div className="card m-3 " style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top mt-2 rounded-circle " alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <Link to="/single" state={ele} className="btn btn-primary">View Recipe</Link>
  </div>
</div>

  })}
    </div>
</div>
  )
}

export default Home
