<template>
  <TheNavbar />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "./components/TheNavbar.vue";

export default defineComponent({
  components: { TheNavbar },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
