import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecipeCard from './RecipeCard';
import { useRecipeContext } from '../../context/RecipeContextProvider';

const Recipes = () => {
  const {recipes} = useRecipeContext()
  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-4 mb-5 d-flex flex-row justify-content-center">
      {
        recipes.map((recipe, idx)=><Col key={idx}><RecipeCard recipe={recipe.recipe}/></Col>)
      }
    </Row>
  )
}

export default Recipes
