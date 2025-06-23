<script setup lang="ts">
import { ref } from 'vue';

const todoValue = ref("");

const emit = defineEmits(['AddTodo'])

function handleAddTodo() {
	emit('AddTodo', todoValue.value);
	todoValue.value = "";
}
</script>

<template>
  <div class="w-full flex flex-row my-4 border rounded-[5px] p-1 shadow-xl">
    <input
	  v-model="todoValue"
      type="text"
      placeholder="New Todos"
      aria-label="Nouvelle tâche"
      class="flex w-full px-1 focus:outline-none"
    />
	<button 
		class="mx-1 flex justify-center items-center w-7 h-7 shrink-0 rounded bg-yellow-500 relative transition-all border border-yellow-500 border-b-[4px] border-b-yellow-700 hover:bg-yellow-600 hover:border-yellow-600 hover:border-b-[3px] hover:border-b-yellow-800 active:bg-yellow-700 active:border-yellow-700 active:border-b-none text-white"
	>
		<v-icon name="px-calendar-month" scale="1.3"></v-icon>
	</button>
    <button
	  @click="handleAddTodo"
      class="flex justify-center items-center w-7 h-7 shrink-0 rounded bg-green-500 relative transition-all border border-green-500 border-b-[4px] border-b-green-700 hover:bg-green-600 hover:border-green-600 hover:border-b-[3px] hover:border-b-green-800 active:bg-green-700 active:border-green-700 active:border-b-none text-white"
    >
      <v-icon name="px-plus" scale="1.3"></v-icon>
    </button>
  </div>
</template>

<style scoped></style>
