import React from 'react'
import Brands from './Brands';
import HeaderProduct from './HeaderProduct';
import Product from './Products';

export default function Home() {
    return (
        <>
            <div className="col-2 content__left">
                <Brands />
                </div>
                <div className="col-10 content__right">
                <HeaderProduct />
                <Product />
            </div>
        </>
    )
}
