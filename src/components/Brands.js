import React, { useState } from 'react'
import './../styles/Brands.css'

export default function Brands() {
    const [isPhone, setIsPhone] = useState(false);
    const [isBook, setIsBook] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    return (
        <div>
            <div
                className="brand__phone"
                onClick={() => {
                    setIsPhone(!isPhone);
                }}
            >Điện thoại</div>
            <div className={isPhone ? '' : 'brand__none'}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Iphone(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Samsung(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Xiaomi(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Oppo(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Realme(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Bphone(0)
                    </label>
                </div>
            </div>
            <div
                className="brand__phone"
                onClick={() => {
                    setIsBook(!isBook);
                }}
            >Sách</div>
            <div className={isBook ? '' : 'brand__none'}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Sách chuyên ngành(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Sách phát triển bản thân(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Tiểu thuyết(0)
                    </label>
                </div>
            </div>
            <div
                className="brand__phone"
                onClick={() => {
                    setIsLaptop(!isLaptop);
                }}
            >Laptop</div>
            <div className={isLaptop ? '' : 'brand__none'}>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Dell(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Asus(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Macbook(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        Thinkpad(0)
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
                        HP(0)
                    </label>
                </div>
            </div>
        </div>
    )
}
