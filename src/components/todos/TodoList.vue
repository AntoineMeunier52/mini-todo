<script setup lang="ts">
import Todo from "./Todo.vue";

import { ref } from "vue";

// import type { TodoType } from "../../assets/types/TodoType.ts";
import type { ClientType } from "../../assets/types/ClientType.ts";

const client = defineProps<{ clientData: ClientType }>();

const isOpen = ref(false);
</script>

<template>
  <table class="text-left w-full">
    <thead class="mb-2">
      <tr>
        <th class="w-full">
          {{ client.clientData.name }}
        </th>
        <th v-if="isOpen">
          <button @click="isOpen = !isOpen">
            <v-icon name="px-chevron-down" scale="1.5"></v-icon>
          </button>
        </th>
        <th v-else>
          <button @click="isOpen = !isOpen">
            <v-icon name="px-chevron-up" scale="1.5"></v-icon>
          </button>
        </th>
      </tr>
    </thead>
    <Transition>
      <tbody v-show="isOpen" class="w-full">
        <Todo v-for="todoValue in client.clientData.todos" :value="todoValue" />
      </tbody>
    </Transition>
  </table>
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
