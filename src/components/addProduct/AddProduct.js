import React from 'react'
import axios from 'axios';
import { Nav,Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import {useState } from 'react';



const AddProduct = () => {
const { register, handleSubmit, errors } = useForm();
const [imageURL, setIMageURL] = useState(null);


const onSubmit = data => {
  console.log(data)
 
  const eventData = {
    name: data.name,
    weight:data.weight,
    price:data.price,
    imageURL: imageURL
  }; 
  const url = `https://hidden-mesa-10060.herokuapp.com/addProducts`;
  
   fetch(url, {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  .then(res => console.log('server side response', res))

}; 

 const handleImageUpload = event => {
  console.log(event.target.files[0])
  const imageData = new FormData();
  imageData.set('key', '30d2ede6057ec67ef443ee525ee8b835');
  imageData.append('image', event.target.files[0]); 
  
  axios.post('https://api.imgbb.com/1/upload', 
   imageData)
  .then(function (response) {
    setIMageURL(response.data.data.display_url); 
   console.log(response.data.data.display_url); 
   })
  .catch(function (error) {
    console.log(error);
  });
  
} 

  return (
    <div>
      <div className='container p-2'>
         <Nav defaultActiveKey="/manageProduct" as="ul" style={{color:'black',padding:'20px',backgroundColor:'lightgray'}}>
  <Nav.Item as="li" >
    <Link style={{color:'black',fontSize:'20px',textDecoration:'none'}}  to="/manageProduct">Manage Product</Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Link style={{margin:'10px',color:'black',fontSize:'20px',textDecoration:'none'}} to="/addProduct">Add Product</Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Link style={{margin:'10px',color:'black',fontSize:'20px',textDecoration:'none'}} to="/editProduct">Edit Product</Link>
  </Nav.Item>
</Nav>
</div>
<br></br>
      <h1>ADD PRODUCT HERE</h1>
<br></br>

     <Form  onSubmit={handleSubmit(onSubmit)} >
  <Form.Row>
    <Form.Group as={Col} controlId="formName">
      <Form.Control type="text" name="name" placeholder="Enter product name" ref={register}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formWeight">
      <Form.Control type="text" name="weight" placeholder="weight"  ref={register}/>
    </Form.Group>
  </Form.Row>
  <br></br>
  <Form.Row>
    <Form.Group as={Col} controlId="formPrice">
      <Form.Control type="number" name="price" placeholder="Enter price"   ref={register} />
    </Form.Group>
    <Form.Group as={Col} controlId="formFile">
      <Form.Control type="file" name="exampleRequired" onChange={handleImageUpload}  />
    </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
 
    </div>
  )
}

export default AddProduct


 {/* <form  onSubmit={handleSubmit(onSubmit)}  >
    
      <input name="name" defaultValue="product name"   ref={register} /> <br/>
      <input name="weight" defaultValue="product weight"  ref={register}  /> <br/>
      <input name="price" defaultValue="product price"  ref={register}   />
      <br/>
      <input name="exampleRequired" type="file"  onChange={handleImageUpload}  />
      <br/>
      <input type="submit" />
    </form> */} 