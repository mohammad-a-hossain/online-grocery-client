import React from "react";
import { Container, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Admin = () => {
  const [manageProduct,setManageProduct] = useState([])
   useEffect(()=>{
     fetch("https://hidden-mesa-10060.herokuapp.com/products")
      .then((res) => res.json())
      .then((products) => {
        setManageProduct(products)
        //console.log(products)
        }); 
   },[])
    
   
  
  const deleteProduct=(id)=> {
    //console.log(id);
      fetch(`https://hidden-mesa-10060.herokuapp.com/delete/${id}`,{
      method:'DELETE' 
  })

 .then(result =>{
  fetch("https://hidden-mesa-10060.herokuapp.com/products")
  .then((res) => res.json())
  .then((products) => {
    setManageProduct(products)
    //console.log(products)
    }); 
 }) 
 }

  return (
    <Container>
      <Nav
        defaultActiveKey="/manageProduct"
        as="ul"
        style={{
          color: "black",
          padding: "20px",
          backgroundColor: "lightgray",
        }}
      >
        <Nav.Item as="li">
          <Link
            style={{ color: "black", fontSize: "20px", textDecoration: "none" }}
            to="/manageProduct"
          >
            Manage Product
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            style={{
              margin: "10px",
              color: "black",
              fontSize: "20px",
              textDecoration: "none",
            }}
            to="/addProduct"
          >
            Add Product
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            style={{
              margin: "10px",
              color: "black",
              fontSize: "20px",
              textDecoration: "none",
            }}
            to="/editProduct"
          >
            Edit Product
          </Link>
        </Nav.Item>
      </Nav>
      <div className="row col-lg-12">
        <Table striped bordered hover>
  <thead>
   
    <tr>
      <th>Product Name</th>
      <th>Product Description</th>
      <th>Product Price</th>
      <th>Action</th>   
    </tr>
  </thead>
  <tbody>
  { 
    manageProduct.map(item =>(
      <tr>
      <td>{item.name}</td>
      <td>{item.weight}</td>
      <td>{item.price}</td>
      <td>
        <button  onClick={()=>deleteProduct(item._id)} type="button">Delete</button>
        <button type="button">edit</button>
      </td>
    </tr>
          ))
    }
    
  </tbody>
</Table>
  
      </div>
    </Container>
  );
};

export default Admin;
