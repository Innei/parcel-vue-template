import VueRouter, { RouteConfig } from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('./components/example.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
