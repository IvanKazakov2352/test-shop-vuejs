import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
    deleteProduct(state, payload) {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
    sortedProducts(state, payload) {
      if (payload === "priceLess") {
        state.products = [...state.products].sort((a, b) => b.price - a.price);
      } else if (payload === "priceMore") {
        state.products = [...state.products].sort((a, b) => a.price - b.price);
      } else if(payload === "priceName") {
        state.products = [...state.products].sort((a, b) => a.nameProduct.toLowerCase() > b.nameProduct.toLowerCase() ? 1: -1);
      }
    },
  },
  getters: {
    allProducts: (state) => state.products,
    countProducts: (state) => state.products.length,
  },
  plugins: [createPersistedState()],
});
