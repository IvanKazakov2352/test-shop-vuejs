<template>
  <div class="form">
    <div class="form-inputs">
      <label class="form-input-label">
        Наименование товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        :class="$v.form.nameProduct.$error ? `form-invalid` : ``"
        type="text"
        v-model="$v.form.nameProduct.$model"
        placeholder="Введите наименование товара"
      />
      <p
        v-if="$v.form.nameProduct.$dirty && !$v.form.nameProduct.required"
        class="form-message-invalid"
      >
        Поле является обязательным
      </p>
    </div>
    <div class="form-inputs">
      <label class="form-input-label">Описание товара</label>
      <textarea
        class="form-textarea"
        placeholder="Введите описание товара"
        v-model="form.description"
      ></textarea>
    </div>
    <div class="form-inputs">
      <label class="form-input-label">
        Ссылка на изображение товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        :class="$v.form.photo.$error ? `form-invalid` : ``"
        type="text"
        placeholder="Введите ссылку"
        v-model="$v.form.photo.$model"
      />
      <p
        v-if="$v.form.photo.$dirty && !$v.form.photo.required"
        class="form-message-invalid"
      >
        Поле является обязательным
      </p>
    </div>
    <div class="form-inputs">
      <label class="form-input-label">
        Цена товара
        <span class="star">*</span>
      </label>
      <input
        class="form-input"
        type="text"
        v-mask="`### ###`"
        :class="$v.form.price.$error ? `form-invalid` : ``"
        placeholder="Введите цену товара"
        v-model="$v.form.price.$model"
      />
      <p
        v-if="$v.form.price.$dirty && !$v.form.price.required"
        class="form-message-invalid"
      >
        Поле является обязательным
      </p>
    </div>
    <div class="form-inputs-button">
      <button
        :style="
          !$v.form.$invalid
            ? `background: #7bae73; cursor: pointer;`
            : `background: #EEEEEE; cursor: inherit; color: #B4B4B4;`
        "
        :disabled="$v.form.$invalid"
        class="form-button"
        @click="addProduct"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  data: () => ({
    valid: false,
    form: {
      nameProduct: "",
      description: "",
      photo: "",
      price: "",
    },
  }),
  methods: {
    addProduct() {
      console.log("Product");
    },
  },
  mixins: [validationMixin],
  validations: {
    form: {
      nameProduct: { required },
      price: { required },
      photo: { required },
    },
  },
};
</script>
