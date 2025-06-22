<script setup lang="ts">
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="w-1/2 h-auto flex flex-col items-center">
      <AddTodo />
      <TodoList />
    </div>
  </div>
</template>

<style scoped></style>
