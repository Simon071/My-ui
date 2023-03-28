<template>
  <i class="simi-icon" :style="style" :class="statusName">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: "SimiIcon",
  props: {
    size: {
      type: String,
      default: "5",
    },
    color: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    style() {
      if (!this.size && !this.color) {
        return {};
      } else {
        return {
          ...(this.size ? { "font-size": this.size + "px" } : {}),
          ...(this.color ? { color: this.color } : {}),
        };
      }
    },
    statusName() {
      return "simi-icon-" + this.name;
    },
  },
};
</script >

<style lang="scss" scoped>
@font-face {
  font-family: "simi-icon"; /* Project id 3970972 */
  src: url("../../fonts/iconfont.woff2?t=1679536546477") format("woff2"),
    url("../../fonts/iconfont.woff?t=1679536546477") format("woff"),
    url("../../fonts/iconfont.ttf?t=1679536546477") format("truetype");
}

[class^="simi-icon"],
[class*="simi-icon"] {
  font-family: "simi-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.simi-icon-warning:before {
  content: "\e631";
}

.simi-icon-success:before {
  content: "\e60b";
}

.simi-icon-shouye2:before {
  content: "\e672";
}

.simi-icon-xiaoxi2:before {
  content: "\e674";
}

.simi-icon-wode2:before {
  content: "\e676";
}

.simi-icon-yingyongchanpin2:before {
  content: "\e678";
}

.simi-icon-zhengce2:before {
  content: "\e67a";
}

.simi-icon-xiangmu2:before {
  content: "\e67c";
}

.simi-icon-xiangmu21:before {
  content: "\e67e";
}

.simi-icon-dingyue2:before {
  content: "\e680";
}

.simi-icon-gengduo2:before {
  content: "\e682";
}

.simi-icon-jinrong2:before {
  content: "\e684";
}

.simi-icon-chuangye2:before {
  content: "\e686";
}

.simi-icon-xiaoxi21:before {
  content: "\e688";
}

.simi-icon-fuwuquan2:before {
  content: "\e68a";
}

.simi-icon-faxian2:before {
  content: "\e68c";
}

.simi-icon-shoucang2:before {
  content: "\e68e";
}

.simi-icon-huiyuan2:before {
  content: "\e68f";
}

.simi-icon-renzheng2:before {
  content: "\e690";
}

.simi-icon-shangpu2:before {
  content: "\e691";
}

.simi-icon-chengguo2:before {
  content: "\e692";
}

.simi-icon-tongji2:before {
  content: "\e693";
}
</style>