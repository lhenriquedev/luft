<template>
  <TheHero />
  <TheProperties />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHero from "../components/hero/TheHero.vue";
import TheProperties from "../components/properties/TheProperties.vue";

export default defineComponent({
  components: { TheHero, TheProperties },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
