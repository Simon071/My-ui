<template>
  <div
    class="simi-slider"
    @mouseenter="this.mouseIn = true"
    @mouseleave="this.mouseIn = false"
  >
    <div class="simi-slider__inner">
      <slot></slot>
      <simi-slider-dot
        :currentIndex="currentIndex"
        :hasDot="hasDot"
        :itemLength="itemLength"
        @dotClick="handleDotClick"
        :trigger="dotTrigger"
      ></simi-slider-dot>
      <simi-slider-director
        v-if="hasDirector"
        :mouseIn="mouseIn"
        @dirClick="handleDirClick"
      ></simi-slider-director>
    </div>
  </div>
</template>

<script>
import SliderDot from "./sliderdot.vue";
import SliderDirector from "./sliderdirector.vue";
export default {
  name: "SimiSlider",
  components: {
    SliderDot,
    SliderDirector,
  },
  props: {
    initial: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    direction: {
      type: String,
      default: "next",
    },
    dotTrigger: {
      type: String,
      default: "mouseenter",
    },
  },
  data() {
    return {
      currentIndex: this.initial,
      t: null,
      dir: {
        next: "next",
        prev: "prev",
      },
      mouseIn: false,
    };
  },
  computed: {
    itemLength() {
      return this.$slots.default()[0].children.length;
    },
  },
  methods: {
    autoplay() {
      if (this.autoPlay) {
        this.t = setInterval(() => {
          this.setIndex(this.direction);
        }, this.duration);
      }
    },
    setIndex(dir) {
      switch (dir) {
        case "next":
          {
            this.currentIndex++;
            if (this.currentIndex === this.itemLength) {
              this.currentIndex = 0;
            }
          }
          break;
        case "prev":
          {
            this.currentIndex--;
            if (this.currentIndex < 0) {
              this.currentIndex = this.itemLength - 1;
            }
          }
          break;
        default:
          break;
      }
    },
    handleDotClick(index) {
      this.currentIndex = index;
      clearInterval(this.t);
      this.t = null;
      this.autoplay();
    },
    handleDirClick(direction) {
      clearInterval(this.t);
      this.setIndex(direction);
      this.autoplay();
    },
  },
  mounted() {
    this.autoplay(this.direction);
  },
  beforeUnmount() {
    clearInterval(this.t);
    this.t = null;
  },
};
</script>

<style lang="scss" scoped>
.simi-slider {
  width: 100%;
  height: 100%;
  .simi-slider__inner {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
}
</style>