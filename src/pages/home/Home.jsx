import React from 'react'
import { useEffect, useState } from 'react'
import Recipes from '../../components/recipe/Recipes'

const Home = () => {
  const app_key = '650151f1ab68be181fbc7391a49c691f'
  const app_id = '62dd3dde'
  const [query, setQuery] = useState('all')
  const [recipes, setRecipes] = useState([])
  const api_url = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${query}`

  const  fetchRecipes = async ()=>{
    const response = await fetch(api_url);
    const data= await response.json();
    setRecipes(data.hits)
  }

  useEffect(()=>{
    fetchRecipes()
  }, [query])
  return (
    <>
            {/* {recipes.map(res=>{
        return <h1>{res.recipe.label}</h1>
      })} */}
      <Recipes recipes={recipes}/>
    </>
  )
}

export default Home
