<template>
  <div
    class="simi-switch"
    :class="{ 'is-checked': value }"
    @click="changeStatus"
  >
    <input
      type="checkbox"
      class="simi-switch__checkbox"
      :name="name"
      :value="value"
      ref="checkbox"
    />
    <span class="simi-switch__core" ref="core">
      <span class="simi-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "SimiSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    // width: {
    //   type: String,
    //   default: 50,
    // },
  },
  data() {
    return {};
  },
  methods: {
    changeStatus() {
      this.$emit("update:value", !this.value);
      this.$nextTick().then(() => {
        this.setColor();
      });
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    this.setColor();
  },
};
</script>

<style scoped lang="scss">
.simi-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .simi-switch__core {
    margin: 0px;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s background-color 0.3s;
    vertical-align: middle;

    .simi-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .simi-switch__checkbox {
    display: none;
  }
}
.simi-switch.is-checked {
  .simi-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .simi-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>