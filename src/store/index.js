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
      console.log(payload)
    },
  },
  getters: {
    allProducts: (state) => state.products,
    countProducts: (state) => state.products.length,
  },
  plugins: [createPersistedState()],
});
