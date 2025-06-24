<template>
  <div v-for="client in clients.clientsData" class="w-full text-left mt-2">
    <TodoList :client-data="client" />
  </div>
</template>

<script setup lang="ts">
import type { ClientType } from "../../assets/types/ClientType";

import TodoList from "./TodoList.vue";

const clients = defineProps<{ clientsData: ClientType[] }>();
</script>

<style scoped></style>
