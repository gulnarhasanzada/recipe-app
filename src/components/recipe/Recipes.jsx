import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RecipeCard from './RecipeCard';

const Recipes = ({recipes}) => {
  return (
    <Row xs={1} sm={2} md={4} className="g-4 mb-5 d-flex flex-row justify-content-center">
      {
        recipes.map((recipe, idx)=><Col key={idx}><RecipeCard recipe={recipe.recipe}/></Col>)
      }
    </Row>
  )
}

export default Recipes
