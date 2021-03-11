<template>
  <div class="HomeTitle">
    <header class="HomeTitle__header">
      <h2>Search</h2>
      <img src="@/assets/img/MarvelLogo.svg" alt="marvel logo">
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle'
}
</script>

<style scoped>
.HomeTitle__header {
  max-width: 450px;
  margin: 5rem auto;
  font-style: italic;
  font-family: var(--font-1);
}

.HomeTitle__header img {
  max-width: 100%;
}
</style>
