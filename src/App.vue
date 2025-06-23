<script setup lang="ts">
import { reactive } from "vue";
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import type { TodoType } from "./components/TodoType.ts";

const todoList: TodoType[] = reactive([]);

function addTodo (value: string) {
	if (!value) {
		return;
	}
	todoList.push({
		done: false,
		message: value
	})
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="max-w-[1200px] w-1/2 h-full flex flex-col items-center">
      <AddTodo @add-todo="addTodo"/>
      <TodoList :todos="todoList"/>
    </div>
  </div>
</template>

<style scoped></style>
