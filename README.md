# my-ui-demo

* Vue 2 Composition API
* Written in JavaScript
* Vite

## 安装
```
npm add simi-ui
```

## 快速开始
```vue
<template>
    <my-button type="primary"> primary</my-button>
</template>
```
```js
import { createApp } from 'vue';
import App from './App.vue';
import SimiUI from 'simi-ui';
import './assets/fonts/font.scss'
const app = createApp(App);
app.use(SimiUI).mount('#app');
```

## 安装依赖
```
pnpm install
```

### 启动本地测试
```
pnpm run dev
```

### 打包组件库
```
pnpm run build
```
