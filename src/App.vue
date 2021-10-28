<template>
  <div id="app">
    <div class="container">
      <Navbar></Navbar>
      <div class="layout">
        <Form></Form>
        <div class="products" ref="prod">
          <Product
            v-for="product in allProducts"
            :key="product.id"
            :product="product"
          ></Product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Navbar = () => import("./views/Navbar.vue");
const Form = () => import("./components/FormComponent.vue");
const Product = () => import("./components/ProductComponent.vue");
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allProducts", "countProducts", "sortAnimation"]),
  },
  watch: {
    sortAnimation() {
      this.$refs.prod.style = "transition: 3s; opacity: 0;";
      setTimeout(() => {
        this.$refs.prod.style =
          "transition: 3s; opacity: 1; transform: translateY(100px);";
      }, 2000);
    },
  },
  components: {
    Navbar,
    Form,
    Product,
  },
  mounted() {
    setTimeout(() => {
      this.$refs.prod.style =
        "opacity: 1; transition: 1s ease-in; transform: translateY(100px);";
    }, 0);
  },
};
</script>
