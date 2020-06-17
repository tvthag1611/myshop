import React from 'react'
import './../styles/Header.css'
import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'


const mapStateToProps = (state) => {
    return {
        carts: state.products.carts,
    };
};
  

export default connect(
    mapStateToProps,
    null,
)
(function Header({carts}) {
    return (
        <div className="header">
            <Link exact="true" to='/myshop' className="link-logo">
                tvthagSHOP
            </Link>
            <div className="hidden-bar">
                <NavLink to='/myshop/phone' className="nav-link">Điện thoại</NavLink>
                <NavLink to='/myshop/book' className="nav-link">Sách</NavLink>
                <NavLink to='/myshop/laptop' className="nav-link">Laptop</NavLink>
            </div>
            <div className="dropdown responsive-bar">
                <button className="btn btn-secondary" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <Link to='/myshop/phone' className="dropdown-item">Điện thoại</Link>
                    <Link to='/myshop/book' className="dropdown-item">Sách</Link>
                    <Link to='/myshop/laptop' className="dropdown-item">Laptop</Link>
                </div>
            </div>
            <div className="header__cart">
                <Link to='/myshop/cart'>
                    <i className="fas fa-shopping-cart"></i>
                </Link>
                <div className="cart__count">{carts.length}</div>
            </div>
            <div className="header__profile"></div>
        </div>
    )
})
