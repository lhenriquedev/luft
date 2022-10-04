<template>
  <router-link
    class="routerLink"
    target="_blank"
    :to="{ name: 'RealtyDetails', params: { id: realty.id } }"
  >
    <div class="realty">
      <img class="realty__image" alt="Imagem do imovel" :src="realty.image" />

      <div class="realty__content">
        <h4 class="realty__type">{{ realty?.type }}</h4>

        <h2 class="realty__price">R$ {{ realty.price }}</h2>

        <h2 class="realty__address">{{ realty.address }}</h2>
        <h3 class="realty__region">{{ realty.region }}</h3>

        <div class="realty__properties">
          <span> {{ realty.area }} m² </span>
          <span> {{ realty.bedrooms }} quartos </span>
          <span> {{ realty.vacancies }} vagas</span>
        </div>

        <div class="realty__favorite">
          <button class="realty__button">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["realty"],
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.realty {
  overflow: hidden;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 8px;

  &__image {
    max-width: 100%;
    object-fit: cover;
  }

  &__content {
    padding: var(--spacing-16);
  }

  &__type {
    margin-bottom: var(--spacing-16);
  }

  &__price {
    font-weight: var(--font-weight-medium);
    margin-bottom: var(--spacing-4);
    color: var(--primary-color);
  }

  &__address {
    font-size: var(--font-size-14);
  }

  &__region {
    font-size: var(--font-size-12);
    margin-bottom: var(--spacing-16);
    color: #6c757d;
  }

  &__properties {
    display: flex;
    gap: var(--spacing-8);
    margin-bottom: var(--spacing-8);
  }

  &__button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;

    border: 1px solid #bbbbbb;
    border-radius: 50%;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}

.routerLink {
  text-decoration: none;
  color: var(--text);
}
</style>
