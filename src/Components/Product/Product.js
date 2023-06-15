import React, { useState } from 'react';
import { addToDB } from '../../Utilities/loacalstorage';
import "./Product.css";

const Product = ({product, handleCart}) => {
    const [active , setActive] = useState("notClicked")
    const [text , setText] = useState("Add to Basket")
    const handleState = () =>{
        setActive(!active);
        setTimeout(()=> setActive(active), 1000);
    }
    const handleText = ()=>{
        setText("Added")
        setTimeout(()=>setText("Add to Basket"), 1000);
    }
    const {image_url, name, price, short_description, ratings, age_limit,id} = product;
    return (
        <div className='product-container'>
            <img src={image_url} alt="" />
            <div className="product-details">
            <h3>{name}</h3>
            <p className='description'>{short_description}</p>
            <p>Age Limit: {age_limit}</p>
            <p>Price: <b>${price}</b></p>
            <p>Raating: <b>{ratings}</b></p>
            </div>
            <div className='btn-container'>
            <button className='addToBasket-btn' style={{backgroundColor: active === "notClicked" ? "rgb(0, 87, 128)"
            : "#2C8943"}} onClick={()=> {
            handleCart(product);
            handleState();
            handleText();
            addToDB(id)}}><p>{text}</p></button>
            </div>
        </div>
    );
};

export default Product;