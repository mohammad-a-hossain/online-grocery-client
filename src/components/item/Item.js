import React from 'react'
import Button from 'react-bootstrap/Button'
import { Card} from 'react-bootstrap';
import { useHistory } from 'react-router';

const Item = (props) => {
 
 const history =useHistory()
 
 const {name,price,imageURL,_id} = props.groItem

  return (
    <Card style={{ width: '18rem',margin:'20px' }}>
  <img src={imageURL} alt=""/> 
  <Card.Body>
    <Card.Title>{name}</Card.Title><hr></hr>
   <Card.Link href="#" style={{color:'black'}}  >${price}</Card.Link>
   <Button style={{marginLeft:'100px'}} onClick={()=>history.push(`/checkout/${_id}`)}   variant="success">buy now</Button>
  </Card.Body>
</Card>
  
  )
}

export default Item
