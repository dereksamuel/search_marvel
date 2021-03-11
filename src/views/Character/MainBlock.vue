<template>
  <div class="Grid" :style="option ? 'grid-template-columns: 3fr 1fr 2fr;' : 'grid-template-columns: 3fr 1fr;'" v-for="character in profileData" :key="character.id">
    <div>
      <div class="Card">
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
    <section v-if="option">
      <div class="Option" v-for="select in option" :key="select.id" style="color: var(--color-light); margin: 1.5rem 0;">{{ select.name }}</div>
    </section>
    <div class="IOCNS" :style="option ? 'grid-column: 3 / 4;' : ''">
      <div style="cursor: pointer;" @click="changeView('stories', character.stories)">
        <h3>Stories</h3>
        <i class="fas fa-book"></i>
      </div>
      <div style="cursor: pointer;" @click="changeView('events', character.events)">
        <h3>Events</h3>
        <i class="fas fa-calendar-week"></i>
      </div>
      <div style="cursor: pointer;" v-if="option" @click="option = null">
        <h3>Cancel</h3>
        <i class="fas fa-window-close" style="color: #fddd;"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  data () {
    return {
      option: null
    }
  },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeView (name, option) {
      this.option = option.items
    }
  }
}
</script>

<style scoped>
  .Grid {
    display: grid;
    width: 100%;
    height: 100%;
  }
  .IOCNS {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-light);
  }
  .Grid div i {
    color: var(--color-light);
    font-size: 61px;
    margin-bottom: 7rem;
  }
</style>
