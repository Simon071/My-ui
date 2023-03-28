<template>
  <div class="app">
    <div class="button">
      <div class="row">
        <simi-button type="primary"> primary</simi-button>
        <simi-button type="success">success</simi-button>
        <simi-button type="warning">warning</simi-button>
        <simi-button type="info">info</simi-button>
        <simi-button type="danger">danger</simi-button>
      </div>
      <div class="row">
        <simi-button type="primary" :plain="true">plain </simi-button>
        <simi-button type="success" :plain="true">plain </simi-button>
        <simi-button type="warning" :plain="true">plain</simi-button>
        <simi-button type="info" :plain="true">plain</simi-button>
        <simi-button type="danger" :plain="true">plain</simi-button>
      </div>

      <div class="row">
        <simi-button type="primary" :circle="true">circle </simi-button>
        <simi-button type="success" :circle="true">circle</simi-button>
        <simi-button type="warning" :circle="true">circle</simi-button>
        <simi-button type="info" :circle="true">circle</simi-button>
        <simi-button type="danger" :circle="true">circle</simi-button>
      </div>

      <div class="row">
        <simi-button type="primary" :round="true">round </simi-button>
        <simi-button type="success" :round="true">round </simi-button>
        <simi-button type="warning" :round="true">round</simi-button>
        <simi-button type="info" :round="true">round</simi-button>
        <simi-button type="danger" :round="true">round</simi-button>
      </div>
    </div>

    <div class="row">
      <simi-button @click="this.dialogVisible = true">打开dialog</simi-button>
      <simi-dialog
        v-model:visible="this.dialogVisible"
        title="这是一个dialog"
        info="这是info"
      ></simi-dialog>
    </div>

    <!-- 测试input -->
    <div class="row">
      <div class="input">
        <simiInput
          clearable
          placeholder="请输入用户名"
          v-model:value="username"
        >
        </simiInput>
        <simiInput type="password" showPassword v-model:value="psw">
        </simiInput>
      </div>
    </div>
    <div class="row">
      <simiSwitch v-model:value="status"> </simiSwitch>
    </div>
    <div class="row">
      <simiRadio label="1" v-model:value="gender">男</simiRadio>
      <simiRadio label="0" v-model:value="gender">女</simiRadio>
    </div>
    <div class="row">
      <simiRadioGroup v-model:value="gender1">
        <simiRadio label="1">男</simiRadio>
        <simiRadio label="0">女</simiRadio>
      </simiRadioGroup>
    </div>
    <div class="row">
      <simi-icon class="simi-icon-wode2" color="orange" size="50"
        >nihao</simi-icon
      >
      <simi-icon class="simi-icon-yingyongchanpin2" color="green" size="30"
        >nihao</simi-icon
      >
      <simi-icon class="simi-icon-tongji2" size="30">nihao</simi-icon>
      <simi-icon name="warning">nihao</simi-icon>
    </div>
    <div class="row">
      <simi-checkBox label="1" v-model:value="active1">1</simi-checkBox>
      <!-- <simi-checkBox label="2" name="2" v-model:value="active2">2</simi-checkBox>
      <simi-checkBox label="3" name="3" v-model:value="active3">3</simi-checkBox> -->
    </div>
    <div class="row">
      <simi-checkBoxGroup v-model:value="city">
        <simi-checkBox label="北京"></simi-checkBox>
        <simi-checkBox label="上海"></simi-checkBox>
        <simi-checkBox label="广州"></simi-checkBox>
      </simi-checkBoxGroup>
    </div>

    <div class="row">
      <simi-progress
        color="#e6a23c"
        :percent="60"
        select="on"
        status="warning"
      ></simi-progress>
      <simi-progress color="#e6a26c" :percent="100" select="on"></simi-progress>
      <simi-progress color="#e6122c" :percent="45" select="in"></simi-progress>
      <simi-progress
        color="#b6a23c"
        :percent="100"
        select="in"
        status="success"
      ></simi-progress>
    </div>

    <div class="row upload">
      <simi-uploader
        :drop="true"
        @changeUpload="changeUpload"
        @dropUpload="dropUpload"
        @deleteUpload="deleteUpload"
      ></simi-uploader>
    </div>

    <div class="row">
      <simi-uploader
        @changeUpload="changeUpload"
        @dropUpload="dropUpload"
        @deleteUpload="deleteUpload"
      ></simi-uploader>
    </div>

    <div class="row slider1">
      <div>
        <simi-slider
          :autoPlay="true"
          :duration="3000"
          :initial="0"
          :hasDot="true"
          :hasDirector="true"
          dotTrigger="mouseenter"
        >
          <simi-slider-item
            v-for="(item, index) of sliderData1"
            :key="index"
            :index="index"
          >
            <p>{{ item.content }}</p>
          </simi-slider-item>
        </simi-slider>
      </div>

      <div>
        <simi-slider
          :autoPlay="true"
          :duration="3000"
          :initial="0"
          :hasDot="true"
          :hasDirector="true"
          dotTrigger="click"
        >
          <simi-slider-item
            v-for="(item, index) of sliderData1"
            :key="index"
            :index="index"
          >
            <p>{{ item.content }}</p>
          </simi-slider-item>
        </simi-slider>
      </div>
    </div>
    <div class="row slider">
      <simi-slider
        :autoPlay="true"
        :duration="3000"
        :initial="2"
        :hasDot="true"
        :hasDirector="true"
      >
        <simi-slider-item
          v-for="(item, index) of sliderData"
          :key="index"
          :index="index"
        >
          <img :src="require(`./assets/img/${item.img_name}`)" />
          {{ item.content }}
        </simi-slider-item>
      </simi-slider>
    </div>

    <div class="row message">
      <simi-button
        type="success"
        @click="
          Message({
            type: types.SUCCESS,
            message: `This is success message`,
          })
        "
        >show success</simi-button
      >
      <simi-button
        type="warning"
        @click="
          Message({
            type: types.WARNING,
            message: `This is warning message`,
          })
        "
        >show warning</simi-button
      >
      <simi-button
        type="info"
        @click="
          Message({
            type: types.MESSAGE,
            message: `This is info message`,
          })
        "
        >show message</simi-button
      >
      <simi-button
        type="danger"
        @click="
          Message({
            type: types.ERROR,
            message: `This is error message`,
          })
        "
        >show error</simi-button
      >
    </div>
  </div>
</template>

<script>
import sliderData from "./data/slider";
import sliderData1 from "./data/content";
import Message, { types } from "./components/message";

// import Button from "./components/button/button.vue";
// import Icon from "./components/icon/icon.vue";
// import Dialog from "./components/dialog/dialog.vue";
// import Input from "./components/input/input.vue";
// import Switch from "./components/switch/switch.vue";
// import Radio from "./components/radio/radio.vue";
// import RadioGroup from "./components/radiogroup/radiogroup.vue";
// import CheckBox from "./components/checkbox/checkbox.vue";
// import CheckBoxGroup from "./components/checkboxgroup/checkboxgroup.vue";
// import Progress from "./components/progress/progress.vue";
// import Uploader from "./components/uploader/uploader.vue";
// import Slider from "./components/slider/slider.vue";
// import SliderItem from "./components/slider/slideritem.vue";
// import SimiMessage from "./components/message/message.vue";

export default {
  name: "App",
  components: {
    // Button,
    // Icon,
    // Dialog,
    // Input,
    // Switch,
    // Radio,
    // RadioGroup,
    // CheckBox,
    // CheckBoxGroup,
    // Progress,
    // Uploader,
    // Slider,
    // SliderItem,
    // SimiMessage,
  },
  data() {
    return {
      dialogVisible: false,
      switchState: false,
      username: "",
      psw: "",
      status: false,
      gender: "1",
      gender1: "1",
      active1: false,
      city: [],
      sliderData,
      sliderData1,
      types,
    };
  },
  methods: {
    setUsername(e) {
      this.username = e.target.value;
    },
    setPassword(e) {
      this.psw = e.target.value;
    },
    changeUpload(file, fileList) {
      console.log(file, fileList);
    },
    dropUpload(file, fileList) {
      console.log(file, fileList);
    },
    deleteUpload(file, fileList) {
      console.log(file, fileList);
    },
    Message,
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  width: 50%;
  .simi-button {
    margin-left: 10px;
  }
}

// .dialog-enter,
// .dialog-leave-to {
//   opacity: 0;
// }

// .dialog-enter-to,
// .dialog-leave {
//   opacity: 1;
// }

// .dialog-enter-active {
//   transition: 0.5;
// }
// .dialog-leave-active {
//   transition: 0.5;
// }
.button {
  margin: 0px;
  padding: 0px;
}
.input {
  width: 300px;
}
.upload {
  padding-left: 20px;
  width: 500px;
  border: 1px solid #ddd;
}

.slider {
  width: 590px;
  height: 470px;
  transform: translateX(10px);
}

.slider1 {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 70%;
  height: 300px;
  transform: translateX(10px);
  div {
    width: 40%;
    height: 100%;
    margin-right: 20px;
  }
}

// .message {
//   border: 1px solid rgba(0, 0, 0, 0.5);
//   margin: 30px;
//   width: 50%;
//   height: 120px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
</style>
