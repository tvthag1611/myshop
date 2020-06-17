import * as types from "./../constants/ActionType";

const initialState = {
  products: [
        {
            id: 1,
            src: 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-chi-tiet-1-400x460.png',
            name: 'Samsung Galaxy Note 10 Lite',
            price: 11490000,
        },
        {
            id: 2,
            src: 'https://clickbuy.com.vn/uploads/2019/03/iPhone-7-jetback.png',
            name: 'Iphone 7 Lock 32Gb cũ',
            price: 3190000,
        },
        {
            id: 3,
            src: 'https://clickbuy.com.vn/uploads/2019/03/apple-iphone-xr-vang-600x600.png',
            name: 'Iphone XR 64Gb quốc tế cũ',
            price: 10690000,
        },
        {
            id: 4,
            src: 'https://didongthongminh.vn/upload_images/2019/01/SAMSUNG-GALAXY-S10-WHITE.png',
            name: 'Samsung Galaxy S10',
            price: 8290000,
        },
        {
            id: 5,
            src: 'https://phuongtung.vn/pt/images/detailed/10/oppo-a1k-400x460.png',
            name: 'Oppo A1K',
            price: 2690000,
        },
        {
            id: 6,
            src: 'https://cdn.tgdd.vn/Products/Images/42/216172/oppo-reno3-pro-den-400x460-400x460.png',
            name: 'Oppo Reno3 Pro',
            price: 13990000,
        }
  ],
  carts: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART:
      return { ...state, carts: [...state.carts, action.cart]};
    case types.DELETE_PRODUCT:
      let list = state.carts.filter(item => item.cart.id !== action.id);
      return { ...state, carts: list};
    case types.SET_CART:
      return { ...state, carts: action.carts};
    default:
      return state;
  }
};

export default myReducer;
