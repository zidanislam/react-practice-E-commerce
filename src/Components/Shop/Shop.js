import React, { useEffect, useState } from 'react';
import { storedProduct } from '../../Utilities/loacalstorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("./products.JSON")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(()=>{
        if(products.length){
            const stored_products = storedProduct();
            const  productArray =[];
            for(const id in stored_products){
                const markedProduct = products.find(product => product.id === id);
                if(markedProduct){
                    const count = stored_products[id];
                    markedProduct.count = count;
                    productArray.push(markedProduct);
                }
            }setCart(productArray)
            }
    },[products])
    let newCart = [];
    const handleCart = (product) =>{
        newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products">
            {products.map(product =>
            <Product key={product.id}
            product ={product}
            handleCart={handleCart}
             ></Product>)}
            </div>

            <div  className='cart'>
            <Cart
            cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;