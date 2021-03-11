<template>
  <div class="App" :style="isLoading ? 'height: 100vh;' : 'height: 100%;'">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>

    <main-layout v-else />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseLoading from './components/BaseLoading'
import MainLayout from './layouts/MainLayout'
import LoadLayout from './layouts/LoadLayout'

export default {
  name: 'App',
  components: {
    BaseLoading,
    LoadLayout,
    MainLayout
  },
  created () {
    this.changeLoading(true)
  },
  mounted () {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      this.changeLoading(false)
    }, 2000)
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.loading.isLoading
    })
  },
  methods: {
    ...mapMutations({
      changeLoading: 'loading/SET_LOADING'
    })
  }
}
</script>

<style>
:root {
  --font-1: 'Roboto', sans-serif;
  --font-2: 'Roboto Condensed', sans-serif;
  --color-dark: #222831;
  --color-semidark: #30475e;
  --color-radiant: #F0141E;
  --color-light: #dddddd;
  --border-radius: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 75%;
}

a {
  font-family: var(--font-2);
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h1, h2 {
  font-family: var(--font-2);
  font-weight: bold;
  color: var(--color-light);
}

#app {
  background-color: var(--color-dark);
  height: 100%;
  min-height: 100vh;
  font-family: var(--font-1);
}

.btn {
  color: var(--color-dark);
  background-color: var(--color-light);
  border: none;
  border-top: 0.2rem solid var(--color-dark);
  border-bottom: 0.2rem solid var(--color-dark);
  border-right: 0.5rem solid var(--color-dark);
  border-left: 0.5rem solid var(--color-dark);
  border-radius: var(--border-radius);
  outline: none;
  padding: 1rem;
  transition: 0.2s all;
}

.btn.danger {
  margin-top: 15px;
  background-color: var(--color-radiant);
  color: var(--color-light);
}

.btn.danger:hover {
  background-color: #c43c42;
  color: #222831;
}

.Submit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
}

.Submit input {
  padding: 1rem;
  padding-right: 45rem;
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
}

.btn.input_append {
  border: none;
  border-radius: 0 10px 10px 0;
}

.btn.input_preppend {
  border-right: none;
}

.btn:hover {
  background-color:#eeeeee;
  filter: blur(0.3px);
}

.Card {
  color: var(--color-light);
  max-width: 450px;
  margin: 2rem auto;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  padding: 3.2rem;
  border-radius: 16px;
  background: #46505c;
}
h3 {
  margin-bottom: 1.2rem;
}
.Card img {
  /* position: absolute; */
  max-width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 3rem;
  /* left: 50%;
  top: -93px;
  transform: translate(-50%, 0); */
}
.Card_text p {
  font-size: 1.2rem;
  margin: 1rem 0;
  background: #222831;
  padding: 3rem;
}
.circle {
  width: 15px;
  height: 15px;
  padding: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle.red {
  background: var(--color-radiant);
}
.circle.green {
  color: #222831;
  background: rgb(105, 221, 105);
}
@media screen and (max-height: 600px) {
  .Grid {
    height: 100%;
  }
}
</style>
