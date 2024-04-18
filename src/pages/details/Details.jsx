import React from 'react'
import { useRecipeContext } from '../../context/RecipeContextProvider'
import { useNavigate } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';
import "./Details.css"
import { ImFire } from "react-icons/im";
import { PiForkKnifeFill  } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { CiWheat } from "react-icons/ci";

const Details = () => {
  const {selectedRecipe} = useRecipeContext();
  const navigate = useNavigate();

  if(!selectedRecipe){
    return navigate('/')
  }
  return (
    <Container className='mt-3 mx-auto'>
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <Image src={selectedRecipe.image} className='details-img'/>
          <div className="totals d-flex flex-row justify-content-center ">
            <div className='total border-right'>
              <ImFire className='icon'/>
              <p className='total-label'>Calories</p>
              <p className='total-num'>{selectedRecipe.calories.toFixed(0)} kcal</p>
            </div>
            <div className='total border-right'>
              <PiForkKnifeFill  className='icon'/>
              <p className='total-label'>Servings</p>
              <p className='total-num'>{selectedRecipe.yield} servings</p>
            </div>
            <div className='total'>
              <FaClock className='icon'/>
              <p className='total-label'>Time</p>
              <p className='total-num'>{selectedRecipe.totalTime} mins</p>
            </div>
          </div>
        </Col>
        <Col className='py-5 px-2'>
          <h1 className='recipe-label mt-4'>{selectedRecipe.label}</h1>
          <h6 className='recipe-source'>{selectedRecipe.source}</h6>
          <h4 className='ingredients-label'>Ingredients</h4>
          <div>
            {selectedRecipe.ingredientLines.map((ing, idx)=>{
              return <p key={idx} className='ingredient-item'><CiWheat className='icon mx-2'/>{ing}</p>
            })}
          </div>
          <div className='nutrients mt-4 py-3'>
          <h4 className='ingredients-label'>Nutrients</h4>
            <Row xs={1} sm={2} md={3}>
              {Object.values(selectedRecipe.totalNutrients).map((nut, idx)=>{
                return <Col key={idx} className='nutrient-item d-flex flex-row justify-content-between border'><span>{nut.label}</span> <span>{nut.quantity.toFixed(0)}{nut.unit}</span></Col>
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
