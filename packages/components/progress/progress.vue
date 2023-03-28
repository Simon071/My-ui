<template>
  <div v-if="select === 'on'" class="simi-progress">
    <div v-if="type == 'in'" class="line">
      <div
        class="colorLine"
        :style="
          'background:' +
          color +
          ';height:26px;text-align:right;line-height:26px;width:' +
          percent +
          '%'
        "
      >
        {{ percent }}%
      </div>
    </div>
    <div v-else class="line">
      <div
        class="colorLine"
        :style="'background:' + color + ';width:' + percent + '%'"
      ></div>
    </div>
    <div v-if="status" class="status">
      <simi-icon :name="status"></simi-icon>
    </div>
    <div v-else-if="percent == 100" class="percent">full</div>
    <div v-else-if="type != 'in'" class="percent">{{ percent }}%</div>
  </div>

  <div v-else class="simi-progress-circle" :style="{ width, height }">
    <svg
      viewBox="0 0 96 96"
      class="simi-progress-circle__svgCircle"
      style="width: 96px; height: 96px"
    >
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        style="stroke-dasharray: 275, 279.602; stroke: #eee"
      ></circle>
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        :style="`stroke-dasharray: ${progressValue}, 279.602;stroke:${color};`"
      ></circle>
    </svg>
    <div v-if="status" class="simi-progress-circle__mask">
      <simi-icon :name="status"></simi-icon>
    </div>
    <div v-else-if="type != 'in'" class="simi-progress-circle__mask">
      {{ percent }}%
    </div>
  </div>
</template>

<script>
import Icon from "../icon/icon.vue";
export default {
  name: "SimiProgress",
  components: { Icon },
  props: {
    type: {
      type: String,
      default: "",
    },
    select: {
      type: String,
      default: "in",
    },
    color: {
      type: String,
      default: "#409eff",
    },
    percent: {
      type: Number,
      default: 0,
    },
    width: {
      type: String,
      default: "210px",
    },
    height: {
      type: String,
      default: "100px",
    },
    status: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      progressValue: (this.percent.value / 100) * 250,
    };
  },
  watch: {
    progressValue(newValue, percent) {
      this.progressValue = (percent / 100) * 250;
    },
  },
};
</script>

<style lang="scss" scoped>
.simi-progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 18px 15px;
  .line {
    width: 90%;
    background-color: rgb(235, 238, 245);
    border-radius: 100px;
    .colorLine {
      height: 6px;
      line-height: 1px;
      text-align: center;
      border-radius: 100px;
      white-space: nowrap;
      transition: width 0.6s ease;
    }
  }
}
.percent {
  min-width: 8%;
  font-size: 14px;
  color: rgb(96, 98, 102);
  text-align: left;
}

.status {
  width: 8%;
  text-align: left;
}

.simi-progress-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100px;
  text-align: center;
  .simi-progress-circle__svgCircle {
    position: relative;
    transform: rotate(-90deg);
  }
  .svg-progress {
    stroke: #2196f3;
    stroke-linecap: round;
    transition: all 0.3s linear;
  }
  .simi-progress-circle__mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>