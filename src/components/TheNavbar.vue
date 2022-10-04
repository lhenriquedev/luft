<template>
  <header class="header container">
    <nav>
      <h2 class="logo">Luft</h2>

      <ul>
        <li>Comprar</li>
        <li>Vender</li>
        <li>Mais</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.header {
  height: var(--header-height);
  border-bottom: 1px solid #eee;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;

    display: flex;
    gap: var(--spacing-32);

    li {
      font-size: var(--font-size-18);
      color: #333;
    }
  }

  .logo {
    font-size: var(--font-size-32);
    font-weight: var(--font-weight-black);

    color: var(--primary-color);
  }
}
</style>
