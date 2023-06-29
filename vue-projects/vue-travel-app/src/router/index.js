import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path: '/brazil', name: 'brazil',component: () => import('../views/Brazil.vue')},
  {path: '/jamaica', name: 'jamaica',component: () => import('../views/Jamaica.vue')},
  {path: '/panama', name: 'panama',component: () => import('../views/Panama.vue')},
  {path: '/destination/:id', component: () => import('../views/DestinationShow.vue')},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // linkActiveClass: 'custom-active'
})

export default router