<template>
  <div>
    <TodoView />
    <Calendar />
  </div>
</template>

<script setup lang="ts">
import TodoView from "./components/todos/TodoView.vue";
import { defineAsyncComponent } from "vue";

const Calendar = defineAsyncComponent(
  () => import("./components/calendar/index.vue")
);
</script>

<style scoped></style>
