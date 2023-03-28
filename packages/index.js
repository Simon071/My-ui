import Button from "./components/button/button.vue";
import Icon from "./components/icon/icon.vue";
import Dialog from "./components/dialog/dialog.vue";
import Input from "./components/input/input.vue";
import Switch from "./components/switch/switch.vue";
import Radio from "./components/radio/radio.vue";
import RadioGroup from "./components/radiogroup/radiogroup.vue";
import CheckBox from "./components/checkbox/checkbox.vue";
import CheckBoxGroup from "./components/checkboxgroup/checkboxgroup.vue";
import Progress from "./components/progress/progress.vue";
import Uploader from "./components/uploader/uploader.vue"
import Slider from "./components/slider/slider.vue";
import SliderItem from "./components/slider/slideritem.vue";
import SliderDirector from "./components/slider/sliderdirector.vue"
import SliderDot from "./components/slider/sliderdot.vue"
import Message from "./components/message/message.vue";
import './fonts/font.scss'

const components = [
    Button,
    Icon,
    Dialog,
    Input,
    Switch,
    Radio,
    RadioGroup,
    CheckBox,
    CheckBoxGroup,
    Progress,
    Uploader,
    Slider,
    SliderItem,
    SliderDirector,
    SliderDot,
    Message,
]

const install = function (Vue) {
    components.forEach(item => {
        Vue.component(item.name, item)
    })
}


export default {
    ...components,
    install
}