<template>
  <transition name="message-fade">
    <div
      v-show="this.visible"
      class="simi-message"
      :class="this.className"
      :style="{
        top: top + 'px',
      }"
    >
      {{ this.message }}
    </div>
  </transition>
</template>

<script>
import types from "./types";
export default {
  name: "SimiMessage",
  data() {
    return {
      visible: false,
      t: null,
      top: 0,
      margin: 20,
      height: 40,
    };
  },
  props: {
    message: {
      type: String,
      default: "This is a message",
    },
    type: {
      type: String,
      default: types.MESSAGE,
      validator(value) {
        return Object.values(types).includes(value);
      },
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    className() {
      return this.type;
    },
  },
  methods: {
    setVisible(v) {
      return new Promise((resovle) => {
        this.visible = v;
        this.t = setTimeout(() => {
          resovle("");
          clearTimeout(this.t);
          this.t = null;
        }, 300);
      });
    },
    setTop(top) {
      this.top = top;
      return top;
    },
  },
};
</script>

<style lang="scss" scoped>
.simi-message {
  position: fixed;
  left: 50%;
  margin-left: -190px;
  z-index: 999;
  width: 380px;
  height: 40px;
  margin-bottom: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &.success {
    background-color: #f0f9eb;
    color: #529b2e;
  }
  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
  }
  &.message {
    background-color: #f4f4f5;
    color: #73767a;
  }
  &.error {
    background-color: #fef0f0;
    color: #c45656;
  }
}

.message-fade-enter-active {
  transition: all 0.3s ease-in;
}

.message-fade-enter-active {
  transition: all 0.3s ease-out;
}

.message-fade-leave-from,
.message-fade-enter-to {
  opacity: 1;
  transform: translateY(20px);
}
</style>