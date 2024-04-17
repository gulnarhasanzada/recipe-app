import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='text-center py-5 d-flex flex-row justify-content-center'>
      <input type='text' className='input-search' placeholder='Search..' onChange={()=>{}}/>
      <select name="category" className='select-search'>
        <option defaultValue>Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="breakfast">Breakfast</option>
      </select>
      <button type='button' className='btn btn-search'>Search</button>
    </div>
  )
}

export default Search
