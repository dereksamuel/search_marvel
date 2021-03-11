<template>
  <div class="Comics">
    <template v-if="comics">
      <div v-for="comic in comics" :key="comic.id" class="Comic">
        <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" />
        <h3>{{ comic.title }}</h3>
        <a :href="comic.urls[0].url" target="__blank" class="btn danger">See more</a>
      </div>
    </template>
  </div>
</template>

<script>
import { getComics } from '../../api/search'

export default {
  name: 'Comics',
  data () {
    return {
      comics: null
    }
  },
  created () {
    this.getAllData()
  },
  methods: {
    async getAllData () {
      const response = await getComics(this.$route.params.characterId)
      this.comics = (await response.json()).data.results
      console.log(this.comics)
    }
  }
}
</script>

<style scoped>
  .Comics {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .Comic {
    max-width: 250px;
    margin: 5rem;
    color: var(--color-light);
  }
  .Comics img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
</style>
