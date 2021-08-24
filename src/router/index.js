import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Analysis from '../views/Analysis.vue'
import Resources from '../views/Resources.vue'
import Sales from '../views/Sales'
import Covid from '../views/Covid'
import Machine from '../views/Machine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Analysis',
    name: 'Analysis',
    component: Analysis

  },
  {
    path: '/Machine',
    name: 'Machine',
    component: Machine

  },
  {
    path: '/Covid',
    name: 'Covid',
    component: Covid

  },
  {
    path: '/Sales',
    name: 'Sales',
    component: Sales
  },
  {
    path: '/Resources',
    name: 'Resources',
    component: Resources
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
