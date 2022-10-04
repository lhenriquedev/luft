<template>
  <section class="hero">
    <TheHeroTextBox />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeroTextBox from "./TheHeroTextBox.vue";

export default defineComponent({
  components: { TheHeroTextBox },
  setup() {},
});
</script>

<style scoped>
.hero {
  background-color: red;
  height: calc(100vh - var(--header-height));

  background-image: url("https://images.pexels.com/photos/1959053/pexels-photo-1959053.jpeg?cs=srgb&dl=pexels-helena-lopes-1959053.jpg&fm=jpg");
  background-size: cover;
  background-position: 50% 21%;
}
</style>
