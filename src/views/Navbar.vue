<template>
  <div class="navbar">
    <h1 class="navbar-title">Добавление товара</h1>
    <select class="select" v-model="selected">
      <option class="select-option" disabled value="">Выберите один из вариантов</option>
      <option
        class="select-option"
        v-for="select in selects"
        :key="select.text"
        :value="select.value"
      >
        {{ select.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data: () => ({
    selected: "",
    selects: [
      { text: 'По наименованию', value: 'priceName' },
      { text: 'По цене (от меньшего к большему)', value: 'priceMore' },
      { text: 'По цене (от большего к меньшему)', value: 'priceLess' }
    ],
  }),
  watch: {
    selected(value) {
      this.$store.commit("sortedProducts", value)
    }
  }
};
</script>
