import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from './Cartcontext';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineFolderDelete } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
function CartDetail() {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemoveFromCart = (productToRemove) => {
    removeFromCart(productToRemove);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>My Cart</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((product) => (
          <li key={product._id} style={{ borderBottom: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
              <img src={product.image} alt={product.title} style={{ maxWidth: '200px', height: 'auto' }} />
            </div>
            <div>
              <p>{product.title}</p>
              <p>Price: ₹ {product.price}/-</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ₹ {product.price * product.quantity}/-</p>
                <div>
            
           
           <Button className='add' variant='success'  onClick={() => incrementQuantity(product)}>
           <FaCloudUploadAlt /> Add
            </Button>&nbsp;
            <Button variant='info' onClick={() => decrementQuantity(product)}>
            <FaCloudDownloadAlt />  Remove
            </Button>&nbsp;
            <Button variant='danger' onClick={() => handleRemoveFromCart(product)}>
            <MdOutlineFolderDelete />   Delete
            </Button>
          </div>
            </div>
          </li>
        ))}
      </ul>
      <div >
        <p>Total Price: ₹ {cart.reduce((total, product) => total + product.price * product.quantity, 0)}/-</p>
      </div>
      <Button variant='danger' onClick={handleClearCart} ><VscClearAll /> Clear Cart</Button>
      
    </div>
  );
};

export default CartDetail;
