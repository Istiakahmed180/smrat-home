import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const ProductContext=createContext()
export const CartContext=createContext()

const Main = () => {

    const [cart,setCart]=useState([])

    const products=useLoaderData()

    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;