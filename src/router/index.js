import { createRouter, createWebHistory } from 'vue-router'
import GetDataMovie from '../views/GetDataMovie.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: { path: '/home' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/getdatamovie',
      name: 'getDataMovie',
      component: GetDataMovie
    },
    {
      path: '/tesmodal',
      name: 'ShowModal',
      component: () => import('../views/ShowModal.vue')
    }
  ]
})

export default router
