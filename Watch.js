import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import watch_gif from '../image/watch_gif.gif'
function Watch() {
  const[watch,setWatch]=useState([])
  useEffect(()=>{
const getdata= async () =>{
  try{
const response= await fetch('http://localhost:4000/api/category/Watches')
const data = await response.json();
setWatch(data)
  }catch (error) {
    console.error('Error fetching data:', error);
  }
};
getdata();
  },[])
  return (
    <div>
<Row>
        <Col md={4}></Col>
        <Col md={4}>
      <img className='lapimg'src={watch_gif}/>
      </Col>
      <Col md={4}></Col>
      </Row>
      <br/><br/>

        <Container>
      <Row>
        {watch.map((product, index) => (
          <Col key={index} xs={12} md={4} lg={3}>
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <img src={product.image} alt={`Product ${index + 1}`} style={{ maxWidth: '100%', height: '300px' }} />
            <Link to={`/product/${product._id}`}> 
              <h4>{product.title}</h4>
              </Link>
             <h4>₹ {product.price}/-</h4>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Watch
