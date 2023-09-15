import * as types from "./types";

const CartReducer = (state = { cart: [] }, action) => {
  let cart = state.cart;

  switch (action.type) {
    case types.REFRESH:
      return { ...state, 
        cart: action.payload };
    default:
      return { ...state, cart };
  }
};

export default CartReducer;
