<script setup lang="ts">
import Todo from "./Todo.vue";
import type { TodoType } from "./TodoType.ts";

const props = defineProps<{todos: TodoType[]}>()
</script>

<template>
  <table class="text-left w-full">
	<thead>
		<tr class="w-full flex flex-row items-center p-2">
			<th class="w-7 mr-4"><v-icon name="px-check" fill="#f5f6fa" scale="1.5"></v-icon></th>
			<th class="w-full">Message</th>
			<th class="w-7 mx-1"><v-icon name="px-edit" scale="1.3" fill="#f5f6fa"></v-icon></th>
			<th class="w-7"><v-icon name="px-close" scale="1.5"></v-icon></th>
		</tr>
	</thead>
	<tbody>
		<Todo v-for="(todoValue) in props.todos" :value="todoValue"/>
	</tbody>
  </table>
</template>

<style scoped></style>
