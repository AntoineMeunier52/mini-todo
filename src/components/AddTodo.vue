<script setup lang="ts">
import { PxPlus } from "oh-vue-icons/icons";
</script>

<template>
  <div class="w-full flex flex-row my-4">
    <input
      type="text"
      placeholder="New Todos"
      aria-label="Nouvelle tâche"
      class="flex w-full border border-gray-500 rounded"
    />
    <button
      class="flex justify-center items-center w-7 h-7 rounded bg-green-500 relative transition-all border border-green-500 border-b-[4px] border-b-green-700 hover:bg-green-600 hover:border-green-600 hover:border-b-[3px] hover:border-b-green-800 active:bg-green-700 active:border-green-700 active:border-b-none"
    >
      <v-icon name="px-plus"></v-icon>
    </button>
  </div>
</template>

<style scoped></style>
