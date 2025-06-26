import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  PxPlus,
  PxCheck,
  PxClose,
  PxEdit,
  PxCalendarMonth,
  PxHumanHandsdown,
  PxChevronDown,
  PxChevronUp,
  PxChevronLeft,
  PxChevronRight,
} from "oh-vue-icons/icons";

addIcons(
  PxPlus,
  PxCheck,
  PxClose,
  PxEdit,
  PxCalendarMonth,
  PxHumanHandsdown,
  PxChevronDown,
  PxChevronUp,
  PxChevronLeft,
  PxChevronRight
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
