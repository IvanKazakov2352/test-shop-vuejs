<template>
  <div class="form">
    <div class="form-inputs">
      <label class="form-input-label">
        Наименование товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        type="text"
        placeholder="Введите наименование товара"
      />
    </div>
    <div class="form-inputs">
      <label class="form-input-label">Описание товара</label>
      <textarea
        class="form-textarea"
        placeholder="Введите описание товара"
      ></textarea>
    </div>
    <div class="form-inputs">
      <label class="form-input-label">
        Ссылка на изображение товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        type="text"
        placeholder="Введите ссылку"
      />
    </div>
    <div class="form-inputs">
      <label class="form-input-label">
        Цена товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        type="text"
        placeholder="Введите цену товара"
      />
    </div>
    <div class="form-inputs">
      <button
        :style="
          valid
            ? `background: #7bae73; cursor: pointer;`
            : `background: #EEEEEE; cursor: inherit; color: #B4B4B4;`
        "
        :disabled="!valid"
        class="form-button"
        @click="test"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
  }),
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
