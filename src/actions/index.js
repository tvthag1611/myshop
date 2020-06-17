import * as types from "./../constants/ActionType";

export const addCart = (product) => {
  return {
    type: types.ADD_CART,
    cart: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const setCartProduct = (carts) => {
  return {
    type: types.SET_CART,
    carts,
  };
};

