import React from 'react'
import './../styles/Cart.css'
import {connect} from 'react-redux'
import * as actions from './../actions/index'

const mapStateToProps = (state) => {
    return {
        cartProduct: state.products.carts,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProduct: (id) => {
            dispatch(actions.deleteProduct(id));
        },
        setCartProduct: (carts) => {
            dispatch(actions.setCartProduct(carts));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(function Cart({cartProduct, deleteProduct, setCartProduct}) {

    let sumPrice = 0;
    cartProduct.forEach(item => {
        if (item.isChoose) {
            sumPrice += item.amount * item.cart.price;
        }
    });

    return (
        <div className="item container">
            <h1>Giỏ hàng của bạn:</h1>
            {   cartProduct.map(item => 
                    <div className="item__product" key = {item.cart.id}>
                        <input type="checkbox" className="choose__item" checked={item.isChoose}
                        onChange={(event) => {
                            setCartProduct(cartProduct.map(product => {
                                if (product.cart.id === item.cart.id) {
                                    product.isChoose = event.target.checked;
                                    return product;
                                }
                                else return product;
                            }))
                        }}
                        />
                        <img
                            src={item.cart.src}
                            alt={item.cart.name}
                            className="img_item"
                        />
                        <div className="info__item">
                            <h3>{item.cart.name}</h3>
                            <strong className="price__item">{item.cart.price}₫</strong>
                        </div>
                        <div className="number__item">
                            <button className="btn btn-secondary add__item"
                                onClick={() => {
                                    setCartProduct(cartProduct.map(product => {
                                        if (product.cart.id === item.cart.id) {
                                            if (product.amount > 0)
                                                product.amount -= 1;
                                            return product;
                                        }
                                        else return product;
                                    }))
                                }}
                            >-</button>
                            <div className="amount__item">{item.amount}</div>
                            <button className="btn btn-secondary add__item"
                                onClick={() => {
                                    setCartProduct(cartProduct.map(product => {
                                        if (product.cart.id === item.cart.id) {
                                            product.amount += 1;
                                            return product;
                                        }
                                        else return product;
                                    }))
                                }}
                            >+</button>
                        </div>
                        <i className="fa fa-trash delete_item" aria-hidden="true"
                            onClick={() => {
                                deleteProduct(item.cart.id);
                            }}
                        ></i>
                    </div>    
                )
            }
            {cartProduct.length === 0 ? 'Giỏ hàng của bạn đang trống' : ''}
            <br />
            {cartProduct.length !== 0 ?
                <div>
                    <h4>Tổng giá:</h4>
                    <strong className="price__item">
                        {sumPrice}₫
                    </strong>
                    <br />
                    <br />
                    <button type="button" name="" id="" className="btn btn-primary">Thanh toán</button>
                </div>
            : ''
            }
        </div>
    )
})
