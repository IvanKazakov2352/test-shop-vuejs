<template>
  <div
    class="product"
    ref="product"
    @mouseover="flexButtonDelete"
    @mouseleave="noneButtonDelete"
  >
    <button class="product-button-delete" ref="button">
      <img class="product-delete-icon" src="../assets/delete-icon-white.png" />
    </button>
    <img
      class="product-photo"
      src="https://richcoward.com/wp-content/uploads/2021/08/product-development.png"
    />
    <h1 class="product-name">Наименование товара</h1>
    <p class="product-description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <h1 class="product-price">12 000 руб</h1>
  </div>
</template>
<script>
export default {
  methods: {
    flexButtonDelete() {
      this.$refs.button.style.display = "flex";
      this.$refs.product.style.cursor = "pointer";
    },
    noneButtonDelete() {
      this.$refs.button.style.display = "none";
    },
  },
};
</script>
