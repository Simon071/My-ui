<template>
  <label class="simi-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="simi-checkbox__input">
      <span class="simi-checkbox__inner"></span>
      <input
        type="checkbox"
        class="simi-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="simi-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "SimiCheckBox",
  inject: {
    CheckboxGroup: {
      default: null,
    },
  },
  props: {
    label: {
      type: String || Number || Boolean,
      default: null,
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    isGroup: {
      get() {
        return !!this.CheckboxGroup;
      },
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("update:value", value)
          : this.$emit("update:value", value);
      },
    },
    isChecked: {
      get() {
        return this.isGroup ? this.model.includes(this.label) : this.model;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.simi-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -ms-user-select: none;
  .simi-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .simi-checkbox__inner {
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      width: 14px;
      height: 14px;
      background-clip: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .simi-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      margin: 0;
    }
  }
  .simi-checkbox__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.simi-checkbox.is-checked {
  .simi-checkbox__input {
    .simi-checkbox__inner {
      border-color: #409eff;
      background: #409eff;
    }
    &:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  .simi-checkbox__label {
    color: #409eff;
  }
}
</style>