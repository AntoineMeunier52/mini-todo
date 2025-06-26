<template>
  <div>
    <TodoView />
    <SelectDate />
  </div>
</template>

<script setup lang="ts">
import TodoView from "./components/todos/TodoView.vue";
import SelectDate from "./components/calendar/index.vue";
</script>

<style scoped></style>
