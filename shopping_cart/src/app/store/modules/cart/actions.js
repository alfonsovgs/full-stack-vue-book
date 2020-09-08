import axios from 'axios';
import * as types from './mutation-types';

const actions = {
  getCartItems({ commit }) {
    axios.get('/api/cart').then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post('/api/cart', cartItem).then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post('/api/cart/delete', cartItem).then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.post('/api/cart/delete/all').then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  checkoutCart({ commit }) {
    axios.post('/api/cart/checkout').then(() => {
      commit(types.CHECKOUT_CART);
    });
  }
};

export default actions;
