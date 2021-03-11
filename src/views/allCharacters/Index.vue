<template>
  <BaseLoading v-if="isLoading"/>
  <div class="Characters" v-else>
    <template v-if="characters !== null">
      <div class="Character">
        <div class="Card" v-for="character in characters" :key="character.id" style="transform: none;">
          <div style="display: flex; align-items: center;">
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" :alt="character.name">
            <h2>{{ character.name }}</h2>
          </div>
          <article class="Card_text">
            <p>{{ character.description ? character.description : 'No hay una descripción de este personaje o grupo 🤔' }}</p>
            <div class="btn danger" style="text-align: center;" @click="$router.push({ name: 'Comics', params: { characterId: character.id } })">
              Ver cómics
            </div>
          </article>
          <div :class="character.comics.available > 700 ? 'circle green' : 'circle red'">{{ character.comics.available }}</div>
        </div>
      </div>
      <a href="https://www.marvel.com/characters" target="_blank" rel="noopener noreferrer">
        <div class="btn" style="margin: 5rem; text-align: center; font-size: 2rem;">
          See more here
        </div>
      </a>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getApiAccount } from '@/api/search'

import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'AllCharacters',
  components: { BaseLoading },
  data () {
    return {
      characters: undefined
    }
  },
  mixins: [
    setError
  ],
  created () {
    this.fetchData()
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.loading.isLoading
    })
  },
  methods: {
    async fetchData () {
      try {
        const res = await getApiAccount()
        this.characters = (await res.json())?.data?.results || []
      } catch (err) {
        this.characters = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      }
    }
  }
}
</script>

<style scoped>
.Character {
  display: flex;
  flex-wrap: wrap;
}
</style>
