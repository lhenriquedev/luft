<template>
  <div class="hero__text-box">
    <h1>Escolha onde quer comprar</h1>
    <div class="hero__search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input type="text" placeholder="Busque por cidade, bairro ou rua..." />
      <button class="button">Buscar imoveis</button>
    </div>
    <p>
      Imoveis a venda em {{ regionCount }} bairros de {{ citiesCount }} cidades
      do Brasil
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const regionCount = ref<number>(85);
    const citiesCount = ref<number>(11);

    return {
      regionCount,
      citiesCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.hero {
  &__text-box {
    width: 600px;
    display: inline-block;
    background-color: var(--white);

    margin-top: var(--spacing-64);
    margin-left: var(--spacing-64);

    padding: var(--spacing-16);
  }

  h1 {
    font-size: var(--font-size-36);
    margin-bottom: var(--spacing-16);

    color: var(--text);
  }

  &__search {
    border: 1px solid #eee;
    border-radius: 20px;

    margin-bottom: var(--spacing-16);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-16);

    padding: var(--spacing-8);

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  input {
    width: 70%;
    padding: 8px;
    border: none;
  }

  p {
    color: var(--text);
  }
}

.button {
  display: block;
  width: 200px;
  padding: var(--spacing-8);

  background-color: var(--primary-color);
  border-radius: 20px;
  border: none;
  color: var(--white);
  cursor: pointer;
  font-size: var(--font-size-16);

  &:hover {
    filter: brightness(0.8);
  }
}
</style>
