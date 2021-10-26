<template>
  <div class="navbar">
    <h1 class="navbar-title">Добавление товара</h1>
    <select class="select">
      <option v-for="select in selects" :key="select">{{ select }}</option>
    </select>
  </div>
</template>
<script>
export default {
  data: () => ({
    selects: [
      "По умолчанию",
      "По цене (От меньшего к большему)",
      "По цене (от большего к меньшему)",
    ],
  }),
};
</script>
