<template>
  <div class="Header">
    <nav class="Header__nav">
      <img src="@/assets/img/marvel_logo_m.png" alt="marvel_logo_m" width="25" />
      <span>MSDK</span>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.Header {
  padding: 3rem;
  color: var(--color-light);
}

.Header__nav {
  display: flex;
  align-items: center;
}

.Header span {
  margin: 0;
  margin-left: 1rem;
}
</style>
