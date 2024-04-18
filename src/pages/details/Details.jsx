import React from 'react'
import { useRecipeContext } from '../../context/RecipeContextProvider'
import { useNavigate } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';

const Details = () => {
  const {selectedRecipe} = useRecipeContext();
  const navigate = useNavigate();

  if(!selectedRecipe){
    return navigate('/')
  }
  return (
    <Container className='mt-3'>
      <Row xs={1} sm={2}>
        <Col><Image src={selectedRecipe.image}/></Col>
        <Col>
          <h1>{selectedRecipe.label}</h1>
          <ul>
            {selectedRecipe.ingredients.map((ing, idx)=>{
              return <li key={idx}>{ing.text}</li>
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
