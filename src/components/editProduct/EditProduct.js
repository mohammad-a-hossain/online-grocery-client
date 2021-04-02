import React from 'react'
import { Nav,Item} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EditProduct = () => {
  return (
    <div>
    <Nav defaultActiveKey="/manageProduct" as="ul" style={{color:'black',padding:'20px',backgroundColor:'lightgray'}}>
<Nav.Item as="li">
<Link style={{color:'black',fontSize:'20px',textDecoration:'none'}} to="/manageProduct">Manage Product</Link>
</Nav.Item>
<Nav.Item as="li">
<Link  style={{margin:'10px',color:'black',fontSize:'20px',textDecoration:'none'}} to="/addProduct">Add Product</Link>
</Nav.Item>
<Nav.Item as="li">
<Link  style={{margin:'10px',color:'black',fontSize:'20px',textDecoration:'none'}} to="/editProduct">Edit Product</Link>
</Nav.Item>
</Nav>
 <h1>edit  product page is under construction</h1>

</div>
  )
}

export default EditProduct
