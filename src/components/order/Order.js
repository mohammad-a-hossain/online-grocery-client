import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import { Table } from "react-bootstrap";


const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
      fetch('https://hidden-mesa-10060.herokuapp.com/orders?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data =>setOrders(data));
  }, [])
    console.log(orders)
  return (
    <div>
      <h1>order page</h1>
      <h2>Buyer's name :{orders.name}</h2>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date and Time</th>
      <th>Name of product</th>
      <th>Amount of product</th>
      <th>price of products</th>
      <th>picture of product</th>
    </tr>
  </thead>
  <tbody>
  { 
 
      orders.map(product =>(
        <tr style={{border:'1px'}}>
          <td>{product.date}</td>
          <td>{product.productName}</td>
          <td>{product.weight}</td>
          <td>{product.price}</td>
          <td><img style={{width:'50px',height:'50px'}} src={product.image}></img></td>
        </tr>
        
          ))
    }
    
  </tbody>
</Table>
   
    </div>
  )
}

export default Order
 