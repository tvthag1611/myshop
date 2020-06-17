import React from 'react'
import './../styles/Product.css'
import {connect} from 'react-redux'
import * as actions from './../actions/index'

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addCart: (product) => {
            dispatch(actions.addCart(product));
        },
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)
(function Products({products, addCart}) {

    return (
        <div className="product">
            {
                products.map(product =>
                    <div className="product__item" key={product.id}>
                        <img src={product.src}
                        alt={product.name}
                        className="img_product"
                        />
                        <h4 className="name_product">{product.name}</h4>
                        <p className="price_product">{product.price}₫</p>
                        <button type="button"
                        name="" id="" className="btn btn-primary btn-product"
                        onClick = {() => addCart(product)}
                        >Thêm vào giỏ hàng</button>
                    </div>
                )
            }
        </div>
    )
})
