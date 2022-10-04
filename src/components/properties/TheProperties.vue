<template>
  <section class="container section">
    <header class="properties__text">
      <h2>Imoveis em destaque</h2>
      <p>Aproveite as oportunidades abaixo e encontre seu lar ideal</p>
    </header>
    <div class="properties__cards">
      <RealtyCard
        v-for="realty in realties"
        :key="realty.id"
        :realty="realty"
      />
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import RealtyCard from "../realty/RealtyCard.vue";
import TheButton from "../button/TheButton.vue";

import getRealties from "../../composables/getRealties";

export default defineComponent({
  components: { RealtyCard, TheButton },
  setup() {
    const { realties, loadRealties } = getRealties();

    onMounted(() => {
      loadRealties();
    });

    return {
      realties,
    };
  },
});
</script>

<style lang="scss">
.properties {
  &__text {
    text-align: center;

    h2 {
      font-size: var(--font-size-52);
      color: var(--text);
    }

    p {
      font-size: var(--font-size-16);
      margin-bottom: var(--spacing-32);
      color: var(--grey);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-32);
  }
}
</style>
