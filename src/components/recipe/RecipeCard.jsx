import React from 'react'
import Card from 'react-bootstrap/Card';
import './RecipeCard.css'
import { useRecipeContext } from '../../context/RecipeContextProvider';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const {selectRecipe} = useRecipeContext();
  const {label, image, source} =recipe;
  const navigate = useNavigate()

  const goToDetails= (recipe)=>{
    selectRecipe(recipe);
    navigate('/details')
  }
  return (
    <Card style={{ width: '95%', borderRadius:'0px', borderColor:'#EAEAEA' }} className='mx-auto my-4'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='label'>{label}</Card.Title>
        <Card.Text>
          <p className='author'>{source}</p>
        </Card.Text>
        <button className="btn btn-details" onClick={()=>goToDetails(recipe)}>Details</button>
      </Card.Body>
    </Card>
  )
}

export default RecipeCard
