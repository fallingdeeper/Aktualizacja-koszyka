import './App.css'
import React, { useEffect, useState } from 'react'

import { Row, Col, Navbar, Button, Nav, Spinner } from 'react-bootstrap'
import { productsGet } from './api/products'
import Products from './Products'
import Basket from './Basket'

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [checkedProduct, setCheckedProduct] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    // handleLoadingOn()
    ;(async () => {
      const data = await productsGet()
      data && setProducts(data)
      setLoading(false)
    })()
  }, [])

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary" onClick={handleShow}>
              Basket
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {!loading ? (
        <Row>
          {products.map(({ id, image, description, title }) => (
            <Col key={id} xs={6} md={2}>
              <Products
                id={id}
                image={image}
                description={description}
                title={title}
                setCheckedProduct={setCheckedProduct}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )}
      <Basket
        checkedProduct={checkedProduct}
        setCheckedProduct={setCheckedProduct}
        show={show}
        handleClose={handleClose}
      />
    </div>
  )
}

export default App
