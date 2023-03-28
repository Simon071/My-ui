<template>
  <div class="simi-dialog__wrapper" v-show="this.visible" @click="handleClose">
    <div class="simi-dialog" :style="{ top, marginTop: width }">
      <!-- 头部 -->
      <div class="simi-dialog__header">
        <slot name="title">
          <span class="simi-dialog__title">{{ title }} </span>
        </slot>
        <button class="simi-dialog__headerbtn" @click="handleClose">
          <i class="simi-icon-guanbi"></i>
        </button>
      </div>
      <!-- 对话框内信息 -->
      <div class="simi-dialog__body">
        <slot name="info">
          <span>{{ info }} </span>
        </slot>
      </div>
      <!-- 底部 -->
      <div class="simi-dialog__footer">
        <slot name="footer">
          <simi-button @click="handleClose"> cancle </simi-button>
          <simi-button @click="handleClose" type="primary">OK </simi-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/button";
export default {
  name: "SimiDialog",
  components: { Button },
  props: {
    title: {
      type: String,
      defalut: "标题",
    },
    info: {
      type: String,
      defalut: "",
    },
    width: {
      type: String,
      defalut: "50%",
    },
    top: {
      type: String,
      defalut: "15vh",
    },
    visible: {
      type: Boolean,
      defalut: false,
    },
  },
  methods: {
    handleClose() {
      // this.$emit("update:visible", false);
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
/*
  scoped add a random attribute like data-v-xxx to all elememt
  and add this attribute to style
*/
.simi-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .simi-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .simi-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .simi-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /* see the vue-loader doc  */
      ::v-deep .simi-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>