import React from 'react'
import './../styles/HeaderProduct.css'

export default function HeaderProduct() {
    return (
        <div className="product__header">
            <input type="text" className="form-control product_search" name="search" placeholder="Search" />
            <div className="dropdown open">
                <button className="btn dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                            Sắp xếp theo
                        </button>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                    <button className="dropdown-item">Từ thấp đến cao</button>
                    <button className="dropdown-item">Từ cao đến thấp</button>
                    <button className="dropdown-item">Phổ biến</button>
                </div>
            </div>
        </div>
    )
}
