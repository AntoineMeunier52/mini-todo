import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { PxPlus, PxCheck, PxClose, PxEdit } from "oh-vue-icons/icons";

addIcons(PxPlus, PxCheck, PxClose, PxEdit);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
