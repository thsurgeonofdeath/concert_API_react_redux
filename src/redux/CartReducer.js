import * as types from "./types";

const CartReducer = (state = { cart: [] }, action) => {
  let cart = state.cart;

  switch (action.type) {
    case types.ADD:
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }
          return item;
        });
        return {
          ...state,
          cart: newCart,
        };
      } else {
        action.payload.quantity = 1;
        cart.push(action.payload);
        return {
          ...state,
          cart: cart,
        };
      }
    case types.UPDATE:
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity;
          }
          return item.quantity > 0 ? item : null;
        });
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: cart,
        };
      }
    case types.DELETE:
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: cart,
        };
      }
    case types.CLEAR:
      return {
        ...state,
        cart: [],
      };
    default:
      return {
        ...state,
        cart: cart,
      };
  }
};

export default CartReducer;
