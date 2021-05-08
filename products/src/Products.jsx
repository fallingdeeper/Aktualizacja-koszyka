import React from 'react'
import { Card, Button } from 'react-bootstrap'

import './Products.css'

const Products = ({ id, image, description, title, setCheckedProduct }) => {
  const handleAddToBasket = ({ id, image, title }) => {
    // checkedProduct
    setCheckedProduct(checkedProduct => [...checkedProduct, { id, image, title }])
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => handleAddToBasket({ id, image, title })}>
          Add to Basket
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Products
