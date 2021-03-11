<template>
  <div>
    <nav class="start">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name: 'allCharacters'}">Explore</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>

<style scoped>
  .start {
    display: flex;
  }
  .start a {
    font-weight: bold;
    color: var(--color-light);
    text-decoration: none;
  }

  .start a:nth-child(1) {
    margin-right: 1rem;
  }

  .start a:nth-child(1):hover {
    text-decoration: underline;
  }

  .start a:nth-child(2):hover {
    text-decoration: underline;
  }

  .start a:nth-child(3) {
    margin-left: 1rem;
  }

  .start a:nth-child(3):hover {
    text-decoration: underline;
  }
</style>
