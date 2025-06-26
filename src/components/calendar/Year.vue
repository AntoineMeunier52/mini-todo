<template>
  <div class="bg-gray-100 p-3 rounded-t-sm flex flex-row">
    <div class="flex flex-row">
      <span class="select-none">
        <v-icon name="px-chevron-left"></v-icon>
      </span>
      <span class="select-none -ml-3">
        <v-icon name="px-chevron-left"></v-icon>
      </span>
    </div>
    <span class="select-none">
      <v-icon name="px-chevron-left"></v-icon>
    </span>
    <p class="mx-4">February 2022</p>
    <span class="select-none">
      <v-icon name="px-chevron-right"></v-icon>
    </span>
    <div class="flex flex-row">
      <span class="select-none">
        <v-icon name="px-chevron-right"></v-icon>
      </span>
      <span class="select-none -ml-3">
        <v-icon name="px-chevron-right"></v-icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

const emit = defineEmits<{
  (e: "yearSelected", v: number): void;
  (e: "monthSelected", v: number): void;
}>();

const year = ref<number>(dayjs().year());
const month = ref<number>(dayjs().month());

function modifyYear(v: number) {
  year.value += v;
  emit("yearSelected", year.value);
}

function modifyMonth(v: number) {
  if (v === 12) {
    month.value = 0;
    return;
  }
  if (v === -1) {
    month.value = 11;
    return;
  }
  month.value += v;
  emit("monthSelected", year.value);
}
</script>

<style scoped></style>
