<template>
  <div class="simi-upload">
    <div class="simi-upload__main">
      <div
        v-if="drop"
        ref="drag"
        class="drop-upload"
        :style="isDrag ? style : ''"
      >
        <div>
          <div class="drop-upload__out">
            <simi-icon name="upload"></simi-icon>
          </div>
          <div class="drop-upload__out">
            <span class="drop-upload__out__word">拖拽到此上传,或</span>
            <span class="drop-upload__out__uploadWord" @click="beginUpload"
              >点击上传</span
            >
          </div>
        </div>
      </div>
      <simi-button v-else type="primary" @click="beginUpload"
        >点击上传</simi-button
      >
      <div v-for="(v, i) in fileList" :key="i" class="file">
        <span>
          {{ v.name }}
        </span>
        <simi-button type="danger" size="tiny" @click="deleteUpload(i)"
          >删除</simi-button
        >
      </div>
    </div>
    <input ref="inputRef" type="file" @change="submitUpload" />
  </div>
</template>

<script>
import Icon from "../icon/icon.vue";
import Button from "../button/button.vue";
export default {
  name: "SimiUpLoader",
  components: {
    Button,
    Icon,
  },
  data() {
    return {
      fileList: [],
      isDrag: false,
      style: {
        background: "#F2F9FF",
        border: " 1px dashed #409eff",
      },
    };
  },
  props: {
    props: {
      type: Object,
    },
    drop: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    beginUpload() {
      this.$refs.inputRef.click();
    },
    submitUpload(e) {
      const files = e.target.files;
      const rawFile = files[0];
      this.fileList.push({
        name: rawFile.name,
        file: rawFile,
      });
      this.$emit("changeUpload", rawFile, this.fileList);
    },
    deleteUpload(index) {
      const file = this.fileList[index];
      this.fileList.splice(index, 1);
      this.$emit("deleteUpload", file, this.fileList);
    },
    handleDrop(e) {
      e.preventDefault();
      this.isDrag = false;
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        this.fileList.push({
          name: e.dataTransfer.files[i].name,
          file: e.dataTransfer.files[i],
        });
      }
      this.$emit("dropUpload", e.dataTransfer.files, this.fileList);
    },
  },
  mounted() {
    if (this.drop) {
      this.$refs.drag.addEventListener("drop", this.handleDrop);
      this.$refs.drag.addEventListener("dragleave", () => {
        this.isDrag = false;
      });
      this.$refs.drag.addEventListener("dragenter", (e) => {
        e.preventDefault();
        this.isDrag = true;
      });
      this.$refs.drag.addEventListener("dragover", (e) => {
        e.preventDefault();
        this.isDrag = true;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.simi-upload {
  width: 100%;
  font-size: 0;
  .drop-upload {
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;

    .drop-upload__out {
      display: flex;
      justify-content: center;

      .drop-upload__out__word {
        color: #606266;
        margin-top: 16px;
        font-size: 14px;
      }

      .drop-upload__out__uploadWord {
        color: mediumpurple;
        font-size: 14px;
        cursor: pointer;
        margin-top: 16px;
      }
    }
  }

  .file {
    display: flex;
    width: 100%;
    margin-bottom: 3px;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 14px;
      color: #666;
    }
  }

  input {
    width: 0 !important;
    height: 0 !important;
  }
}
</style>