<script setup lang="ts">
import { reactive } from "vue";

import type { TodoType } from "../../assets/types/TodoType.ts";
import type { ClientType } from "../../assets/types/ClientType.ts";

import AddTodo from "./AddTodo.vue";
// import TodoList from "./TodoList.vue";
import ClientTodo from "./ClientTodo.vue";

import clients from "../../data/clientData.ts";

const todoList: TodoType[] = reactive([]);
const clientsData: ClientType[] = reactive(clients);

function addTodo(value: string) {
  if (!value) {
    return;
  }
  todoList.push({
    done: false,
    message: value,
  });
}
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="max-w-[1200px] w-1/2 h-full flex flex-col items-center">
      <AddTodo @add-todo="addTodo" />
      <ClientTodo :clients-data="clientsData" />
      <SelectDate />
    </div>
  </div>
</template>

<style scoped></style>
