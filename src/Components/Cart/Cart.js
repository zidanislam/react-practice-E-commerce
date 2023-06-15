import React, { useState } from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    const deliveryDays = localStorage.getItem("delivery_days") || 0;
    const [delivery, setDelivery] = useState(deliveryDays);
    const handleDelivery =(days)=>{
        localStorage.setItem("delivery_days", days)
        setDelivery(days)
        
    }
    let total = 0;
    for(const product of cart){
        if(!product.count){
            product.count=1;
        }
        total = total + product.price * product.count;
       console.log(product);
    }
    return (
        <div className='side-bar'>
            <div className="user-section">
                <img src="" alt="" />
                <h3>Jahid Hassan</h3>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div className="info">
                <p><b>75</b><small>Kg</small><br />Weight</p>
                <p><b>6.5</b><small></small><br />Height</p>
                <p><b>25</b><small>yrs</small><br />Age</p>
            </div>
            <h3>Delivery in Days</h3>
            <div className="delivery">
                <button value={1} onClick={()=> handleDelivery(1)}>
                    1
                </button>
                <button onClick={()=> handleDelivery(3)}>
                    3
                </button>
                <button onClick={()=> handleDelivery(5)}>
                    5 
                </button>
                <button onClick={()=> handleDelivery(7)}>
                    7
                </button>
            </div>
            <h3>Order Summery</h3>
            <div className="summery">
                    <p><b>Product Price: </b></p>
                    <p>${total.toFixed(2)}</p>
            </div>
            <div className='summery'>
                    <p><b>Delivery Details: </b></p>
                    <p>{delivery}</p>
            </div>
        </div>
    );
};

export default Cart;