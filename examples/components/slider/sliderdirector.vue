<template>
  <transition>
    <div class="wrapper">
      <button
        class="simi-slider__director directRight"
        v-if="mouseIn"
        @click="handleDirect('next')"
      >
        &gt;
      </button>
      <button
        class="simi-slider__director directLeft"
        v-if="mouseIn"
        @click="handleDirect('prev')"
      >
        &lt;
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SimiSliderDirector",
  props: {
    mouseIn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleDirect(dir) {
      this.$emit("dirClick", dir);
    },
  },
};
</script>

<style lang="scss" scoped>
.simi-slider__director {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  line-height: 36px;
  height: 36px;
  width: 36px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(31, 45, 61, 0.11);
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  text-align: center;
  font-size: 14px;
  z-index: 3;
}

.directRight {
  right: 16px;
}
.directLeft {
  left: 16px;
}
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  appearance: auto;
}
</style>