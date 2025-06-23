<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const todoValue = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
const todoCustomer = ref("");
const todoDeadline = ref("");
const todoChar = ref(0);
const flashCharLimit = ref(false);

const emit = defineEmits(['addTodo'])

onMounted(() => {
	inputRef.value?.focus();
})

function handleAddTodo() {
	emit('addTodo', todoValue.value);
	todoValue.value = "";
}

function handleKeyDown(event: KeyboardEvent) {
	if (todoChar.value === 64 && event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
		flashCharLimit.value = true;
		setTimeout(() => {
			flashCharLimit.value = false;
		}, 300);
		return;
	}
}

watch(todoValue, (newValue) => {
	todoChar.value = newValue.length;
});
</script>

<template>
	<div class="w-full">
		<div class="w-full flex flex-row mt-4 mb-1 border rounded-[5px] p-1 shadow-xl">
		  <input
			ref="inputRef"
			v-model="todoValue"
			@keydown="handleKeyDown($event)"
			maxlength="64"
			type="text"
			placeholder="New Todos"
			aria-label="Nouvelle tâche"
			class="flex w-full px-1 focus:outline-none"
		  />
		  <button 
			  class="mr-1 flex justify-center items-center w-7 h-7 shrink-0 rounded bg-yellow-500 relative transition-all border border-yellow-500 border-b-[4px] border-b-yellow-700 hover:bg-yellow-600 hover:border-yellow-600 hover:border-b-[3px] hover:border-b-yellow-800 active:bg-yellow-700 active:border-yellow-700 active:border-b-none text-white"
		  >
			  <v-icon name="px-human-handsdown" scale="1.3"></v-icon>
		  </button>
		  <button 
			  class="mr-1 flex justify-center items-center w-7 h-7 shrink-0 rounded bg-yellow-500 relative transition-all border border-yellow-500 border-b-[4px] border-b-yellow-700 hover:bg-yellow-600 hover:border-yellow-600 hover:border-b-[3px] hover:border-b-yellow-800 active:bg-yellow-700 active:border-yellow-700 active:border-b-none text-white"
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
		<div class="w-full flex flex-row items-center justify-around px-20 text-gray-600 mb-5">
			<p :class="['transition-all', flashCharLimit ? 'text-red-600 animate-pulse font-bold' : 'text-gray-600']">todo length : {{ todoChar }}/64</p>
			<p>customer : {{ todoCustomer }}</p>
			<p>deadline : {{ todoDeadline }}</p>
		</div>
	</div>
</template>

<style scoped></style>
