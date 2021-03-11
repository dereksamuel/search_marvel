<template>
  <BaseLoading v-if="isLoading"/>
  <div class="Character" v-else>
    <template v-if="characters !== null">
      <MainBlock :profile-data="characters"/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getApiAccount } from '@/api/search'

import MainBlock from './MainBlock.vue'
import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading'

export default {
  name: 'Character',
  components: { BaseLoading, MainBlock },
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
        const res = await getApiAccount('characters?', this.$route.params.characterId + '&')
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

</style>
