import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang?/',
      name: 'Home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/:lang?/about',
      name: 'About',
      component: () => import('../pages/AboutPage.vue')
    }
  ]
})

router.beforeEach((route) => {
  i18n.global.locale.value = route.params.lang || 'en'

  return true
})

export default router
