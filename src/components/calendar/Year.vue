<template>
  <div class="bg-gray-950 p-3 rounded-t-md grid place-items-center"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";

const yearEmit = defineEmits<{ (e: "selected", v: number): void }>();
const monthEmit = defineMonth<{ (e: "selected", v: number): void }>();

const year = ref<number>(dayjs().year());
const month = ref<number>(dayjs().month());

function modifyYear(v: number) {
  year.value += v;
  yearEmit("selected", year.value);
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
  yearEmit("selected", month.value);
}
</script>

<style scoped></style>
