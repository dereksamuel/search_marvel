import { createRouter, createWebHistory } from 'vue-router'

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/character/:characterId', name: 'Character' },
  { path: '/character/comics/:characterId', name: 'Comics' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '/all', name: 'allCharacters' }
]

const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () =>
      import(
        /* webpackChunkName: "about" */
        '@/views/' + r.name + '/Index.vue'
      )
  }
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
