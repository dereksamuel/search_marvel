<template>
  <div class="BaseLoading">
    <div class="BaseLoading_content">
      <img :src="MarvelM" alt="icon marvel m" width="52" />
    </div>
    <h2 class="BaseLoading_pharr">Loading...</h2>
  </div>
</template>

<script>
import MarvelM from '../assets/img/marvel_logo_m.png'

export default {
  name: 'BaseLoading',
  data () {
    return {
      MarvelM
    }
  }
}
</script>

<style scoped>
  .BaseLoading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .BaseLoading_content {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-radiant);
    border-radius: 50%;
    border: 2rem solid var(--color-semidark);
    animation: infinite rounded 1s alternate;
  }
  .BaseLoading_content img {
    border-radius: 50%;
  }
  .BaseLoading_pharr {
    text-align: center;
    margin: 2rem;
  }
  @keyframes rounded {
    0% {
      border: 2rem solid var(--color-semidark);
    }
    100% {
      border: 1rem solid var(--color-semidark);
    }
  }
</style>
