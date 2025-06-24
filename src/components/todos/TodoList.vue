<script setup lang="ts">
import Todo from "./Todo.vue";

import { ref } from "vue";

// import type { TodoType } from "../../assets/types/TodoType.ts";
import type { ClientType } from "../../assets/types/ClientType.ts";

const client = defineProps<{ clientData: ClientType }>();

const isOpen = ref(false);
</script>

<template>
  <div class="text-left w-full">
    <div class="mb-2 px-2 flex flex-row items-center">
      <h3 class="flex-auto">
        {{ client.clientData.name }}
      </h3>
      <button
        @click="handleAddTodo"
        class="flex mr-1 justify-center items-center w-7 h-7 shrink-0 rounded bg-green-500 relative transition-all border border-green-500 border-b-[4px] border-b-green-700 hover:bg-green-600 hover:border-green-600 hover:border-b-[3px] hover:border-b-green-800 active:bg-green-700 active:border-green-700 active:border-b-none text-white"
      >
        <v-icon name="px-plus" scale="1.3"></v-icon>
      </button>
      <button
        @click="isOpen = !isOpen"
        v-if="isOpen"
        class="rounded hover:bg-gray-300"
      >
        <v-icon name="px-chevron-down" scale="1.5"></v-icon>
      </button>
      <button
        @click="isOpen = !isOpen"
        v-else
        class="rounded hover:bg-gray-300"
      >
        <v-icon name="px-chevron-up" scale="1.5"></v-icon>
      </button>
    </div>
    <Transition>
      <div v-show="isOpen" class="w-full">
        <Todo v-for="todoValue in client.clientData.todos" :value="todoValue" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
