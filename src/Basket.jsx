import React from 'react'
import { Modal, Card, Button } from 'react-bootstrap'
import { observer } from 'mobx-react'
import './Basket.css'
const Basket = observer(({ show, handleClose, setCheckedProduct, checkedProduct }) => {
  const handleRemoveItem = id => {
    setCheckedProduct(checkedProduct.filter(item => item.id !== id))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Basket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {checkedProduct.length > 0 ? (
          checkedProduct.map(({ id, image, title }) => (
            <Card key={id}>
              <Card.Body>
                <img alt={id} src={image} className="imgAdded" />
                {title}
                <Button variant="outline-dark" onClick={() => handleRemoveItem(id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Please add product</p>
        )}
      </Modal.Body>
    </Modal>
  )
})

export default Basket
