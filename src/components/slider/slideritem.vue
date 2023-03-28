<template>
  <transition>
    <div class="slider-item" v-show="index === this.$parent.currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SimiSliderItem",
  props: {
    index: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-item {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: #99a9bf;
  img {
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>