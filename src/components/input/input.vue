<template>
  <div
    class="simi-input"
    :class="{ 'simi-input--suffix': clearable || showPassword }"
  >
    <input
      class="simi-input__inner"
      :class="{ 'is-disable': disable }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
    <span class="simi-input__suffix" v-if="Suffix">
      <i class="simi-icon-guanbi" v-if="clearable && value" @click="clear"></i>
      <i class="simi-icon-yanjing" v-if="showPassword" @click="show"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "SimiInput",
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update:value", e.target.value);
    },
    clear() {
      this.$emit("update:value", "");
    },
    show() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    Suffix() {
      return this.clearable || this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped >
.simi-input {
  width: 100%;
  font-size: 14px;
  position: relative;
  display: inline-block;
  display: flex;
  flex-direction: right;
  .simi-input__inner {
    // -webkit-appearance: none;
    background-image: none;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0px 15px;
    font-size: inherit;
    display: inline-block;
    color: #606266;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    outline: none;
    width: 100%;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disable {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.simi-input--suffix {
  .simi-input__inner {
    padding-right: 30px;
  }
  .simi-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(cubic-bezier(0.645, 0.045, 0.355, 1));
    }
  }
}
</style>