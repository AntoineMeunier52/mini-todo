<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-row items-center">
    <label class="flex flex-col items-center cursor-pointer select-none mr-4">
      <input type="checkbox" name="Todo finish" class="peer hidden" />
      <span
        class="flex justify-center items-center box w-6 h-6 border border-gray-300 rounded relative transition-all duration-200 peer-checked:bg-green-500 peer-checked:border-green-500 peer-checked:border-b-[4px] peer-checked:border-b-green-600 peer-checked:text-white"
      >
        <v-icon name="px-check" fill="#f5f6fa" scale="1.5"></v-icon>
      </span>
    </label>
    <p class="flex w-full">je suis une nouvelle todo</p>
    <button
      class="flex justify-center items-center box w-10 h-7 rounded m-4 bg-yellow-500 relative transition-all border border-yellow-500 border-b-[4px] border-b-yellow-700 hover:bg-yellow-600 hover:border-yellow-600 hover:border-b-[3px] hover:border-b-yellow-800 active:bg-yellow-700 active:border-yellow-700 active:border-b-none"
    >
      <v-icon name="px-edit" class="text-white text-base leading-none"></v-icon>
    </button>
    <button
      class="flex justify-center items-center box w-10 h-7 rounded bg-red-500 relative transition-all border border-red-500 border-b-[4px] border-b-red-700 hover:bg-red-600 hover:border-red-600 hover:border-b-[3px] hover:border-b-red-800 active:bg-red-700 active:border-red-700 active:border-b-none"
    >
      <v-icon
        name="px-close"
        class="text-white text-base leading-none"
      ></v-icon>
    </button>
  </div>
</template>

<style scoped></style>
