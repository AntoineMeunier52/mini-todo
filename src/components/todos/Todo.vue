<script setup lang="ts">
import type { TodoType } from "../../assets/types/TodoType.ts";
const props = defineProps<{ value: TodoType }>();
</script>

<template>
  <div
    class="w-full flex flex-row items-center hover:bg-gray-100 transition-all duration-200 p-2"
  >
    <label class="flex flex-col items-center cursor-pointer select-none mr-4">
      <input type="checkbox" name="Todo finish" class="peer hidden" />
      <span
        class="flex justify-center items-center box w-6 h-6 border border-gray-300 rounded relative transition-all duration-200 peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:border-b-[4px] peer-checked:border-b-green-600 peer-checked:text-white"
      >
        <v-icon name="px-check" fill="#f5f6fa" scale="1.5"></v-icon>
      </span>
    </label>
    <p class="flex-auto">{{ props.value.message }}</p>
    <button
      class="flex justify-center items-center box w-7 h-7 shrink-0 rounded mx-1 bg-yellow-500 relative transition-all border border-yellow-500 border-b-[4px] border-b-yellow-700 hover:bg-yellow-600 hover:border-yellow-600 hover:border-b-[3px] hover:border-b-yellow-800 active:bg-yellow-700 active:border-yellow-700 active:border-b-none"
    >
      <v-icon
        name="px-edit"
        class="text-white text-base leading-none"
        scale="1.3"
      ></v-icon>
    </button>
    <button
      class="flex justify-center items-center box w-7 h-7 shrink-0 rounded bg-red-500 relative transition-all border border-red-500 border-b-[4px] border-b-red-700 hover:bg-red-600 hover:border-red-600 hover:border-b-[3px] hover:border-b-red-800 active:bg-red-700 active:border-red-700 active:border-b-none"
    >
      <v-icon
        name="px-close"
        class="text-white text-base leading-none"
        scale="1.5"
      ></v-icon>
    </button>
  </div>
</template>

<style scoped></style>
