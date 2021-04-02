
import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './login.css'
import {Container} from 'react-bootstrap';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
//import {  googleSignIn} from './loginManager.js'
import {googleSignIn} from './loginmanager'

//initializLoginFrameWork()

function Login() {

const [newUser, setNewUser] = useState(false)

  const [user,setUser] =useState({
    isSignIn :false,
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
  })

  const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
//for setting redirection after login
const history= useHistory()
const location =useLocation()
let { from } = location.state || { from: { pathname: "/" } };

const setGoogleSignIn=()=>{
   googleSignIn()
   .then(res =>{
       console.log(res)
     setUser(res)
     setUserLoggedIn(res)
     history.replace(from)
   })
}

/* const setFaceBookLogin=()=> {
  faceBookLogin()
     .then(res =>{
      console.log(res)
      setUser(res)
      setUserLoggedIn(res)
      history.replace(from)
     })
}
 */


 /*  const handleChange =(e)=>{
    let isFieldValid = true;
    if(e.target.name === 'email'){
         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
       // console.log(isEmailValid)
    }
    if(e.target.name === 'name'){
        isFieldValid = /^[a-zA-Z]/.test(e.target.value)
     
   }

    if(e.target.name==='password'){
      isFieldValid= e.target.value.length > 6;
    }

    if(isFieldValid){
      const newUserInfo ={...user};
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  } */

  /* --------- creating with email and password--------------- */
  /* const handleSubmit =(e)=>{
    if(newUser&& user.name && user.password){
     createUserWithEmailAndPassword(user.name,user.email,user.password)
     .then(res =>{
         //console.log(res)
         const gotData={...user}
         console.log(gotData)
      setUser(res)
      setUserLoggedIn(res)
      history.replace(from)
    })
    } */
   /*  if(!newUser && user.email && user.password){
       signInWithEmailAndPassword(user.email,user.password)
       .then(res =>{
         console.log(res)
        setUser(res)
        setUserLoggedIn(res)
        history.replace(from)
      })

    } */

        // e.preventDefault()
 // }


return (
<Container fluid>
    <Container>
    <div>
    {/* <form onSubmit={handleSubmit}>
        {!newUser ?<h1>Login Here</h1>:<h1>Sign-up here</h1>}
     {newUser && <> <label for="name">Name</label>
      <input type="text"  onBlur={handleChange} name="name" placeholder="Your name.." required/> 
      </>}

        <label for="email">Email</label>
        <input type="email" id="email" name="email" onBlur={handleChange} placeholder="Your email.." required/>

        <label for="password">Password</label>
       <input type="password" id="password" onBlur={handleChange} name="password" placeholder="Your password.." title="password must be 7 digit or more" required/> 

        <input type="submit" value="Submit"/>
     

       <h3>new user ?</h3><input type="checkbox" onChange={()=>setNewUser(!newUser)} value="Sign-up here"  name="newUser"/> - Sign-Up
    </form>
 */}
     <p style={{color:'red'}}>{newUser.error}</p>
     {newUser.success && <p style={{color:'green'}}>user {newUser ? "created" :"logged in"} successfully</p>}
    <hr></hr>
    
    {/* <div><button onClick={setFaceBookLogin}  style={{width:'200px',height:'50px',borderRadius:'20%',border:'none',backgroundColor:'Chocolate',color:'black'}} ><FontAwesomeIcon icon={faFacebookF} style={{color:'blue',marginRight:'10px',fontSize:'20px'}}></FontAwesomeIcon>Facebook-Login</button> </div> */}

    <div><button onClick={setGoogleSignIn} style={{width:'200px',height:'50px',borderRadius:'20%',border:'none',color:'black',backgroundColor:'Chocolate'}}><img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" alt="" style={{width:'20px',height:"20px"}}></img> Google Login</button> </div> 
    </div>
    </Container>
</Container>
)
}
export default Login

// firebase client id 498614969964-qbb0cr3ik7i04m0bldjcdtki5kbjiijd.apps.googleusercontent.com 
// web client secret wNUqGtaFYe0vPNm8PO3hYl6S