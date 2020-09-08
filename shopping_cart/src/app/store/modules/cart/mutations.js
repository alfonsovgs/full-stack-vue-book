import * as types from './mutation-types';

const mutations = {
  [types.UPDATE_CART_ITEMS](state, payload) {
    state.cartItems = payload;
  },
  [types.CHECKOUT_CART](state) {
    state.checkout = true;
  }
};

export default mutations;
