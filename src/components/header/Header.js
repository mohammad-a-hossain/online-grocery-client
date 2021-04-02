
import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext} from '../../App';


import { Navbar,Nav, Container,FormControl, Form,Button } from 'react-bootstrap';



const Header = () => {
  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
  const [user, setUser] = useState(true)
 
  return (
      <Container>
  
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
    <Navbar.Brand href="#home">ONLINE GROCERY-SHOP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
       <Nav className="justify-content-center">
        <Link to="/home" style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}}>Home</Link>
        <Link to="/order" style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}}>Order</Link>
        <Link to="/admin" style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}}>Admin</Link>
        <Link to="/deal" style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}}>Deals</Link>
       
       
    
    
      <Link style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}} to="/login">Login</Link>
     {/*  <button style={{border:'none',marginLeft:'5px',fontSize:'18px'}} onClick={()=>setUserLoggedIn({})} >sign-out</button> */}
      <Link style={{margin:'5px',fontSize:'20px',textDecoration:'none',color:'black'}} href="#features"  onClick={()=>setUserLoggedIn({})}>Logout</Link>
      <p style={{margin:'5px',textDecoration:'none',color:'black'}}>{userLoggedIn.displayName || userLoggedIn.name || userLoggedIn.email || user.name }</p>
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>
  <Container className="justify-content-center m-4 " >
  <Form inline className='justify-content-center'>
      <FormControl type="text"  placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Container>
    </Container> 
  )
}

export default Header
