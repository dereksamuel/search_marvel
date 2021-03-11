<template>
  <div class="Footer">
    <div class="links">
      <FooterLinks />
    </div>
    <h5 style="margin-top: 2rem; color: #69747f;">Hecho por Derek Paúl en el 2021 con L-O-V-E</h5>
  </div>
</template>

<script>
import FooterLinks from './FootLinks'

export default {
  name: 'Footer',
  components: {
    FooterLinks
  }
}
</script>

<style scoped>
  .Footer {
    padding: 5rem;
    margin-top: 8rem;
    color: var(--color-light);
    background-color: var(--color-semidark);
    font-size: 1.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .Footer h5 {
    letter-spacing: 2.5px;
  }
</style>
