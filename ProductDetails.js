import React, { useEffect, useState,use, useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import { useCart } from "./Cartcontext"; 
import Swal from 'sweetalert2';
const ProductDetails = () => {
  const { _id } = useParams();
  const {cart,dispatch}=useCart();
  const [product, setProduct] = useState();
  console.log(_id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/productgetbyId/${_id}`
        );
        const data = await response.json();
        console.log("Product Data:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [_id]);
 
  const handleAddToCart = () => {
   
      console.log("Adding to cart:", product);
      dispatch({ type: 'ADD_TO_CART', payload: product });
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product is added in your cart ",
        showConfirmButton: false,
        timer: 1500
      });
  };
  
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <Row className="back">
        <Col md={1}></Col>
        <Col md={5}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
          <img
            src={product.image}
            style={{ maxWidth: "100%", textAlign: "center", height: "300px" }}
          />
          </Col>
             <Col md={2}></Col>
          </Row><br/>
         <Row>
          <Col md={2}></Col>
          <Col md={5}>&nbsp;<Button className="cartbtn" onClick={handleAddToCart}><TiShoppingCart />&nbsp;ADD TO CART</Button></Col>
          <Col md={5}></Col>
          </Row>
        </Col>
        <Col md={5}>
          <Row>
            <Col md={8}>
              <h2 className="brand">{product.title}</h2>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
          <Col md={1}></Col>
          <Col md={10}>
          <h4 className="brand"><MdOutlineCurrencyRupee />&nbsp;{product.price}/-</h4>
            </Col>
          <Col md={1}></Col>
          </Row>

          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <h4 className="brand">Description:</h4>
              <h4  className="brand">{product.description}</h4>
            </Col>
            <Col md={1}></Col>
          </Row>

          <Row>
          <Col md={1}></Col>
          <Col md={10}>
              <h4 className="brand">Brand:&nbsp;{product.brand}</h4>
            </Col>
          <Col md={1}></Col>
          </Row>

       

          <Row>
          <Col md={1}></Col>
          <Col md={10}>
              <h4 className="brand">Stock:&nbsp;{product.stock}</h4>
            </Col>
          <Col md={1}></Col>
          </Row>

          <Row>
          <Col md={1}></Col>
          <Col md={10}>
             <Button className="rate"> <h4>{product.rating}&nbsp;<IoIosStar /></h4></Button>
            </Col>
          <Col md={1}></Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
