<script setup lang="ts">
import { reactive } from "vue";
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import type { TodoType } from "./components/todoType";

const todoList: Array<TodoType> = reactive([]);

function addTodo (value: string) {
	console.log(value)
	todoList.push({
		done: false,
		message: value
	})
	console.log(todoList);
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="w-1/2 h-auto flex flex-col items-center">
      <AddTodo @AddTodo="addTodo"/>
      <TodoList />
    </div>
  </div>
</template>

<style scoped></style>
