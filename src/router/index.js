import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/municipalidad',
    name: 'municipalidad',
    component: () => import(/* webpackChunkName: "about" */ '../views/MunicipalidadView.vue')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsletterView.vue')
  },
  {
    path: '/ordenanzas',
    name: 'ordenanzas',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdenanzasView.vue')
  },

  {
    path: "/:catchAll(.*)",
    name: 'ErrorView',
    component: () => import('../views/ErrorView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
