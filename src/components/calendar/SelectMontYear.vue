<template>
  <div class="bg-gray-100 p-3 rounded-t-sm flex flex-row items-center">
    <div
      @click="modifyYear(-1)"
      class="flex flex-row items-center justify-center rounded hover:bg-gray-300 w-7 h-7"
    >
      <span class="select-none">
        <v-icon name="px-chevron-left"></v-icon>
      </span>
      <span class="select-none -ml-3">
        <v-icon name="px-chevron-left"></v-icon>
      </span>
    </div>
    <span
      @click="modifyMonth(-1)"
      class="flex flex-row items-center justify-center select-none rounded hover:bg-gray-300 w-7 h-7"
    >
      <v-icon name="px-chevron-left"></v-icon>
    </span>
    <p class="w-32 mx-4 text-center select-none">{{ showMonth }} {{ year }}</p>
    <span
      @click="modifyMonth(1)"
      class="flex flex-row items-center justify-center select-none rounded hover:bg-gray-300 w-7 h-7"
    >
      <v-icon name="px-chevron-right"></v-icon>
    </span>
    <div
      @click="modifyYear(1)"
      class="flex flex-row items-center justify-center rounded hover:bg-gray-300 w-7 h-7"
    >
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
import { computed, ref } from "vue";
import dayjs from "dayjs";

const emit = defineEmits<{
  (e: "yearSelected", v: number): void;
  (e: "monthSelected", v: number): void;
}>();

const year = ref<number>(dayjs().year());
const month = ref<number>(dayjs().month());

function modifyYear(v: number) {
  year.value += v;
  console.log(year.value);
  //emit("yearSelected", year.value);
}

function modifyMonth(v: number) {
  let temp = month.value + v;
  if (temp === 12) {
    temp = 0;
    modifyYear(1);
  } else if (temp === -1) {
    temp = 11;
    modifyYear(-1);
  }
  month.value = temp;
  console.log("mois modifié", month.value, "=>", showMonth.value);
  //emit("monthSelected", year.value);
}

const showMonth = computed(() => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthList[month.value];
});
</script>

<style scoped></style>
