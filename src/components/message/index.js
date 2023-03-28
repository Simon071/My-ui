import types from "./types";
import MessageComponent from './message.vue'
import { createApp, ref, watch } from 'vue'
import { findIndex } from "./utils";

const messageArr = ref([])

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
}

Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type;
        return Message(options);
    }
})

function showMessage(app, duration) {
    const frag = document.createDocumentFragment();
    const vm = app.mount(frag);
    messageArr.value.push(vm);
    document.body.appendChild(frag);


    vm.setVisible(true);
    setTop(vm);



    watch(messageArr, () => {
        setTop(vm);
    })

    unshowMessage(app, vm, duration);
}

function unshowMessage(app, vm, duration) {
    vm.timer = setTimeout(async () => {
        await vm.setVisible(false);
        app.unmount(app);
        messageArr.value = messageArr.value.filter(item => item !== vm);
        clearTimeout(vm.timer);
        vm.timer = null;
    }, duration || 3000)
}

function setTop(vm) {
    const currentIndex = findIndex(messageArr.value, vm)
    vm.setTop(vm.margin * (currentIndex + 1) + vm.height * currentIndex)
}

export {
    types
}

export default Message;