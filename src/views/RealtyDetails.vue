<template>
  <div class="container">{{ id }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
