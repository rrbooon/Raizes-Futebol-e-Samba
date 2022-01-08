import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publicacoes',
    name: 'Publicacoes',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Publicacoes.vue')
  },
  {
    path: '/jogos',
    name: 'Jogos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Jogos.vue')
  },
  {
    path: '/historia',
    name: 'Historia',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Historia.vue')
  },
  {
    path: '/hino',
    name: 'Hino',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Hino.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
