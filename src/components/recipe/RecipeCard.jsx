import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RecipeCard.css'

const RecipeCard = ({recipe}) => {
    const {label, image, source} =recipe;
  return (
    <Card style={{ width: '95%', borderRadius:'0px', borderColor:'#EAEAEA' }} className='mx-auto my-4'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='label'>{label}</Card.Title>
        <Card.Text>
          <p className='author'>{source}</p>
        </Card.Text>
        <button className="btn btn-details">Details</button>
      </Card.Body>
    </Card>
  )
}

export default RecipeCard
