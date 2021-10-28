<template>
  <div
    class="product"
    ref="product"
    @mouseover="flexButtonDelete"
    @mouseleave="noneButtonDelete"
  >
    <button
      class="product-button-delete"
      ref="button"
      @click="deleteProduct(product.id)"
    >
      <img class="product-delete-icon" src="../assets/delete-icon-white.png" />
    </button>

    <img class="product-photo" :src="product.photo" />
    <h1 class="product-name">{{ product.nameProduct }}</h1>
    <p class="product-description">
      {{ product.description }}
    </p>
    <h1 class="product-price">{{ product.price }} руб</h1>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    flexButtonDelete() {
      this.$refs.product.style.cursor = "pointer";
      this.$refs.button.style = "display: flex;";
    },
    noneButtonDelete() {
      this.$refs.button.style.display = "none";
    },
    deleteProduct(id) {
      this.$refs.product.style =
        "transform: translateY(30px); transition: 1s; opacity: 0;";
      setTimeout(() => {
        this.$store.commit("deleteProduct", id);
      }, 1000);
    },
  },
};
</script>
