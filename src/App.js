import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Login from './components/login/Login'
import Admin from './components/admin/Admin'
import Order from './components/order/Order'
import Notfound from './components/notfound/Notfound'
import PrivateRout from './components/privaterout/PrivateRout'
import { createContext,useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Deal from './components/deal/Deal';
import AddProduct from './components/addProduct/AddProduct';
import EditProduct from './components/editProduct/EditProduct';
import CheckOut from './components/checkout/CheckOut';
export const UserContext = createContext()




function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn,setUserLoggedIn]}>
   <Container>
     <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
             <PrivateRout path="/admin">
              <Admin/>
            </PrivateRout>
            <PrivateRout path="/addProduct">
              <AddProduct/>
            </PrivateRout>
            <PrivateRout path="/manageProduct">
              <Admin/>
            </PrivateRout>
            <PrivateRout path="/editProduct">
              <EditProduct/>
            </PrivateRout>
            <PrivateRout path="/order">
              <Order/>
            </PrivateRout> 
            <PrivateRout path="/checkout/:_id">
              <CheckOut/>
            </PrivateRout> 
            <PrivateRout path="/deal">
              <Deal/>
            </PrivateRout> 
            <Route path="/login">
              <Login/>
            </Route>
            <Route path='*'>
           <Notfound/> 
          </Route>
          </Switch>
      </Router> 
        
   
  </Container>
  </UserContext.Provider> 

  
  )
}

export default App;
