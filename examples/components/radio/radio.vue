<template>
  <label class="simi-radio" :class="{ 'is-checked': label === model }">
    <span class="simi-radio__input">
      <span class="simi-radio__inner"></span>
      <input
        type="radio"
        class="simi-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="simi-radio__label">
      <slot> </slot>
      <template v-if="!$slots.default">{{ label }}</template></span
    >
  </label>
</template>

<script>
export default {
  name: "SimiRadio",
  inject: {
    RadioGroup: {
      default: null,
    },
  },
  computed: {
    isGroup: {
      get() {
        return !!this.RadioGroup;
      },
    },
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("update:value", value)
          : this.$emit("update:value", value);
      },
    },
  },
  props: {
    label: {
      type: String || Boolean || Number,
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.simi-radio {
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
  .simi-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .simi-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100px;
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
    .simi-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      margin: 0;
    }
  }
  .simi-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.simi-radio.is-checked {
  .simi-radio__input {
    .simi-radio__inner {
      border-color: #409eff;
      background: #409eff;
    }
    &:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  .simi-radio__label {
    color: #409eff;
  }
}
</style>