import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React, { useContext} from 'react';
import { UserContext } from '../../App';


const CheckOut = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {_id}= useParams()
  //console.log(_id)

  const [selectItem, setSelectItem] = useState([])
 
  useEffect(()=>{
        fetch('http://localhost:6060/products')
        .then(res =>res.json())
        .then(data =>setSelectItem(data)
         // console.log(data)
          )
  },[_id])
  
  const findEle = selectItem.find(val =>val._id === _id)
  console.log(findEle)

  //sending data to mongoDb
  const handleOrder = () =>{
    const newOrder = {
      productName:findEle.name,
      weight:findEle.weight,
      price:findEle.price,
      image:findEle.imageURL,
      email:loggedInUser.email,
      name:loggedInUser.name,
      date: new Date().toDateString()
    };
    console.log(newOrder)
    fetch(`http://localhost:6060/addOrder`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}


  return (
    <div> 
        <h1>order page</h1>
        <table>
       <tr>
           <th>name</th>
           <th>weight</th>
           <th>quantity</th>
            <th>price</th>
       </tr>
       <tr>
           <td>{findEle?.name} </td>
           <td>{findEle?.weight}</td>
           <td>1</td>
           <td>${findEle?.price}</td>
       </tr>
      {/*  <button type="submit">checkout</button> */}
      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><button onClick={handleOrder} type="submit"><Link to='/order'>checkout</Link> </button></td>
      </tr>
        </table>
     
    </div>
  )
}

export default CheckOut
//console.log(selectItem)

  //const getGrocery ={...selectItem}
  //console.log(getGrocery)

// const [grocery,setGrocery] =useState(getGrocery)
   // console.log(grocery)
  //const havGrocery= grocery.filter(Type => Type._id === _id)
 // console.log(havGrocery)
  //havGrocery.map(key =>console.log(key.price))