import React, { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Row, Col, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allprodect from "./component/Allprodect";
import "./prodect.css";
import Loginpg from "./component/Loginpg";
import Watch from "./component/Watch";
import Mobile from "./component/Mobile";
import Laptop from "./component/Laptop";
import Perfume from "./component/Perfume";
import ProductDetails from "./component/ProductDetails";
import Cartdetail from "./component/Cartdetail";
import { Cartcontext, CartProvider } from "./component/Cartcontext";
import { Link } from "react-router-dom";
import { useCart } from "./component/Cartcontext";
import { FaShopify } from "react-icons/fa";
const CartButton = () => {
  const { cart } = useCart();
  return (
    <Link to="/cart">
     <span className="button">  <FaShoppingCart />
      <i className="bi bi-cart4"></i>({cart.length})</span>
    </Link>
  );
};
function App() {
  let username=sessionStorage.getItem("username")
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <div>
            <Row className="title2">
              <Col md={4}></Col>
              <Col md={4}>
                <h1 className="ecomcs">
                  <FaShopify /> Online Store
                </h1>
              </Col>
              <Col md={4}>Welcome {username}</Col>
            </Row>

            <Row className="title2">
              <Col md={1}></Col>
              <Col md={2}>
                <NavLink href="/allprodect">
                  <h2 className="hover1">All Products</h2>
                </NavLink>
              </Col>
              <Col md={2}>
                <NavLink href="/watch">
                  <h2 className="hover1">Watch</h2>
                </NavLink>
              </Col>
              <Col md={2}>
               <h2 className="hover1"> <NavDropdown title="Electronics">
                  <NavDropdown.Item  id="dropdown-split-basic" href="/moblie">
                    <h4>Mobiles</h4>
                  </NavDropdown.Item>
                  <NavDropdown.Item id="dropdown-split-basic" href="/laptop">
                  <h4> Laptops</h4>
                  </NavDropdown.Item>
                </NavDropdown></h2>
              </Col>
              <Col md={2}>
                <NavLink href="/perfume">
                  <h2 className="hover1">Perfume</h2>
                </NavLink>
              </Col>
              <Col md={1}>
                <NavLink href="/login">
                  <h2 className="hover1">Login</h2>
                </NavLink>
              </Col>
              <Col md={1}>
                <h2 className="hover1">
                 <NavLink href="/cart">
                    <CartButton />
                  </NavLink>
                </h2>
              </Col>
              <Col md={1}></Col>
            </Row>
          </div>
          <br />
          <Routes>
            <Route path="/allprodect" element={<Allprodect username={username} />}></Route>
            <Route path="/" element={<Loginpg />}></Route>
            <Route path="/login" element={<Loginpg />}></Route>
            <Route path="/watch" element={<Watch />}></Route>
            <Route path="/moblie" element={<Mobile />}></Route>
            <Route path="/laptop" element={<Laptop />}></Route>
            <Route path="/perfume" element={<Perfume />}></Route>
            <Route path="/product/:_id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cartdetail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
