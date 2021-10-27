<template>
  <div id="app">
    <div class="container">
      <Navbar></Navbar>
      <div class="layout">
        <Form></Form>
        <div v-if="countProducts" class="products" name="fade-slide">
          <Product
            v-for="product in allProducts"
            :key="product.id"
            :product="product"
          ></Product>
        </div>
        <NoProducts v-else></NoProducts>
      </div>
    </div>
  </div>
</template>
<script>
const Navbar = () => import("./views/Navbar.vue");
const Form = () => import("./components/FormComponent.vue");
const Product = () => import("./components/ProductComponent.vue");
const Loader = () => import("./views/Loader.vue");
const NoProducts = () => import("./views/NoProductsComponent.vue")
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allProducts", "countProducts"]),
  },
  components: {
    Navbar,
    Form,
    Product,
    Loader,
    NoProducts
  },
};
</script>
