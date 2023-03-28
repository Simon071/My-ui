<template>
  <ul class="dot-wrapper" v-if="hasDot">
    <li class="dot-item" v-for="item in itemLength" :key="item">
      <button
        v-if="this.trigger === 'click'"
        class="dot-link"
        :class="{ 'is-active': item - 1 === this.currentIndex }"
        @click="dotClick(item - 1)"
      ></button>
      <button
        v-if="this.trigger === 'mouseenter'"
        class="dot-link"
        :class="{ 'is-active': item - 1 === this.currentIndex }"
        @mouseenter="dotClick(item - 1)"
      ></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SimiSliderDot",
  props: {
    itemLength: {
      type: Number,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    currentIndex: {
      type: Number,
    },
    trigger: {
      type: String,
      default: "mouseenter",
    },
  },
  methods: {
    dotClick(index) {
      this.$emit("dotClick", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.dot-wrapper {
  // width: 70px;
  // height: 13px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0;
  z-index: 1;
  padding-left: 0px;
  background-color: transparent;
  position: absolute;
  margin: 0;
  padding: 0;
  text-align: center;
  .dot-item {
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    margin: 3px;
    .dot-link {
      background-color: #c0c4cc;
      opacity: 0.24;
      display: block;
      width: 30px;
      height: 4px;
      border-radius: 4px;
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      transition: 0.3s;
    }
    .is-active {
      opacity: 1;
    }
  }
}
</style>