<template>
  <div class="HomeForm">
    <form @submit.prevent="onSubmit" class="Submit">
      <label>
        <input type="text" required placeholder="Busca por un personaje" v-model="form.search" />
        <button class="btn | input_append" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </label>
    </form>
    <p style="text-align: center; color: #486377;">Sugerencia de búsqueda: SpiderMan</p>
  </div>
</template>

<script>
export default {
  name: 'HomeForm',
  data () {
    return {
      form: {
        search: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form.search)
      this.$router.push({ name: 'Character', params: { characterId: this.form.search } })
    }
  }
}
</script>

<style scoped>

</style>
