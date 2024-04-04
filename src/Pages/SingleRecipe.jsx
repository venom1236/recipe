import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleRecipe = () => {
  let location = useLocation()
  console.log(location.state.recipe)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6  d-flex justify-content-center">
          <img src={location.state.recipe.image} alt="" />
        </div>
        <div className="col-md-6">
          <h3 className='text-center'>{location.state.recipe.label}</h3>
          <h5 className='text-center'>{location.state.recipe.mealType[0]}</h5>
          <div className='row d-flex '>
            <h4 className='text-center mt-4 mb-3'>Nutrients</h4>
          <div className="col-4 bg-warning">
            <h4>{location.state.recipe.totalNutrients.CA.label}</h4>
            <p>{Math.floor(location.state.recipe.totalNutrients.CA.quantity)}{location.state.recipe.totalNutrients.CA.unit}</p>
          </div>
          <div className="col-4 bg-warning m-2">
          <h4>{location.state.recipe.totalNutrients.FAT.label}</h4>
            <p>{Math.floor(location.state.recipe.totalNutrients.FAT.quantity)}{location.state.recipe.totalNutrients.FAT.unit}</p>
          </div>
          <div className="col-3 bg-warning">
          <h4>{location.state.recipe.totalNutrients.PROCNT.label}</h4>
            <p>{Math.floor(location.state.recipe.totalNutrients.PROCNT.quantity)}{location.state.recipe.totalNutrients.PROCNT.unit}</p>
          </div>
          </div>
         <div className='text-center'>
         <Link className='btn btn-success ' to={location.state.recipe.url}>How to make</Link>
         </div>
        </div>

      </div>
      <div className="row mt-3">
        <h3 className='text-center'>Ingredients </h3>
       <ul style={{width:"max-content",margin:"auto"}} className='d-flex align-items-left flex-column '>
        
       {location.state.recipe.ingredientLines.map((ele)=>{
          return <li>{ele}</li>
        })}
       </ul>
      </div>
    </div>
  )
}

export default SingleRecipe

