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
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/NosotrosView.vue')
  },
  {
    path: '/municipalidad/autoridades',
    name: 'autoridades',
    component: () => import(/* webpackChunkName: "about" */ '../views/AutoridadesView.vue')
  },
  {
    path: '/municipalidad/direcciones',
    name: 'direcciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/DireccionesView.vue')
  },
  {
    path: '/municipalidad/oficinadepartes',
    name: 'oficinadepartes',
    component: () => import(/* webpackChunkName: "about" */ '../views/OficinaPartesView.vue')
  },
  {
    path: '/municipalidad/docs',
    name: 'documentoss',
    component: () => import(/* webpackChunkName: "about" */ '../views/DocumentosView.vue')
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
