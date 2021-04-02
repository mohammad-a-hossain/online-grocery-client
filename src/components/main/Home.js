
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Item from '../item/Item';


const Home = () => {

  const [groceries, setGroceries] = useState([])
  useEffect(()=>{
        fetch('http://localhost:6060/products')
        .then(res =>res.json())
        .then(data =>setGroceries(data)
          //console.log(data)
          )
  },[])
/*   const [selectItems,setSelectItems] = useState([]) 
  
         const addItemHandler=(groItem)=>{
          const newSelectItems= [...selectItems,groItem]
          setSelectItems(newSelectItems) 
       }  */
  return (
    <Container fluid className="row d-flex justify-content-center">
   
     {
     groceries.map(groItem => <Item key={groItem._id} groItem={groItem} ></Item>)
     }
    
  </Container>
  )
}

export default Home


 /*   const items = [
    {
        name: 'milk',
        imgUrl: 'https://www.shodagor.com/wp-content/uploads/2020/10/Teer-1-300x300.jpg',
        price: 100
       
    },
    {
      name: 'oninon',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60qnrADasT2V7FTH0KiJrey9ucQa2--ebRQ&usqp=CAU',
      price: 200
     
  },
  {
    name: 'tea',
    imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/priyoshop/content/Images/thumbs/0203720_danish-original-chinigura-aromatic-rice-1-kg_415.jpeg',
    price: 300
   
},
{
  name: 'biscute',
  imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiHu_d98RFsGdZMXkTUmsTnSYfBSpHvUDkpzeVMAtVdVs7AJVnaYqo9KiRsLIjlnEBsY&usqp=CAU',
  price: 400
 
},
{
  name: 'burger',
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdb9HbmY2IzakV7uML0aqvN2A9J8n0vfoPcW85ufui8l3OaMzowifc7BBdIldGgMJzhM&usqp=CAU',
  price: 500
 
},//
{
  name: 'sanduch',
  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAQsDZHPP7CQdFt48FSaljr_usD5zwHQ2OwjLcbDKVdptUZ_bR2tjBexXFGGbYZ3r5-U&usqp=CAU',
  price: 600
 
},

]  */