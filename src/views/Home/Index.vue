<template>
  <div class="home">
    <HomeTitle />
    <HomeForm />
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import HomeForm from './HomeForm'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>
