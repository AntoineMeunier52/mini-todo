<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import dayjs from "dayjs";

const Date = defineAsyncComponent(() => import("./Date.vue"));
const Month = defineAsyncComponent(() => import("./Month.vue"));
const Year = defineAsyncComponent(() => import("./Year.vue"));

const selectedDateValue = ref(dayjs().date());
</script>

<template>
  <!-- v-bing="$attrs" => permet de bind les attribut lors de l'appel du composent dans le composent parent-->
  <div class="flex space-x-5" v-bind="$attrs">
    <div class="flex flex-col">
      <Year />
      <Month />
      <Date />
    </div>
    <div class="w-1/2">
      <span v-if="selectedDateValue">
        You have selected <br />
        {{ `${selectedDateValue}` }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
