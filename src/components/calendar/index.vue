<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import dayjs from "dayjs";

const Date = defineAsyncComponent(() => import("./Date.vue"));
const Month = defineAsyncComponent(() => import("./Month.vue"));
const Year = defineAsyncComponent(() => import("./Year.vue"));

const selectedDateValue = ref(dayjs().date());
</script>

<template>
  <div>
    <div>
      <Year />
      <Month />
      <Date />
    </div>
    <div>
      <span v-if="selectedDateValue">
        You have selected <br />
        {{ `${selectedDateValue}` }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
