<template>
  <div id="app">
    <div class="container">
      <Navbar></Navbar>
      <div class="layout">
        <Form></Form>
        <div class="products">
          <Product v-for="item in 10" :key="item"></Product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Navbar = () => import("./views/Navbar.vue");
const Form = () => import("./components/FormComponent.vue");
const Product = () => import("./components/ProductComponent.vue");
export default {
  components: {
    Navbar,
    Form,
    Product,
  },
};
</script>
