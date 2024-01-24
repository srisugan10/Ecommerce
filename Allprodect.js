import React, { useEffect } from 'react'
import { useState } from 'react';
import { Carousel,Row,Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import img_1 from '../image/img_1.png';
import img_2 from '../image/img_2.png';
import img_3 from '../image/img_3.png';
import img_4 from '../image/img_4.png';
import img_5 from '../image/img_5.png';
import img_6 from '../image/img_6.png';
import img_7 from '../image/img_7.png';
function Allprodect() {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    const [all,setAll]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/productget');
            
            const data = await response.json();
            setAll(data);
            console.log(all)
            console.log(all.title)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    console.log(all)
        fetchData();
      }, []);

console.log("Product Images:", all.map(product => product.image));
console.log("Product id", all.map(product=>product._id))

    return (
        <div >
         
          <Row>
<Col md={3}></Col>
<Col md={6}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={1000}>
                    <img  className="img" src={img_1} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img   src={img_2} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img  src={img_3} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img  src={img_4} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img  src={img_5} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img src={img_6} />
                </Carousel.Item>
                <Carousel.Item className="img" interval={1000}>
                    <img src={img_7} />
                </Carousel.Item>
              
            </Carousel>
            </Col>
            <Col md={3}></Col>
            </Row>

            <Container>
      <Row>
        {all.map((product, index) => (
          <Col key={index} xs={12} md={4} lg={2.5}>
              
            <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
       
            <img src={product.image} alt={`Product ${index + 1}`} style={{ maxWidth: '100%', textAlign:'center',height: '300px' }} />
            <Link to={`/product/${product._id}`}> 
              <h4 className='brand'>{product.brand}</h4>
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

export default Allprodect
