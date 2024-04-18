import React from 'react'
import './Search.css'
import { useRecipeContext } from '../../context/RecipeContextProvider'

const Search = () => {
  const {updateSearch} = useRecipeContext();
  return (
    <div className='text-center py-5 search-container'>
      <input type='text' className='input-search' placeholder='Search..' onChange={()=>{}}/>
      <select name="category" className='select-search' onChange={(e)=>updateSearch(e.target.value)}>
        <option value="breakfast" defaultValue>Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="teatime">Teatime</option>
      </select>
      <button type='button' className='btn btn-search'>Search</button>
    </div>
  )
}

export default Search
