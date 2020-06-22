import Vue from 'vue'
import VueRouter from 'vue-router'
const Recommend = () => import('@/components/recommend/recommend')
const Singer = () => import('@/components/singer/singer')
const Rank = () => import('@/components/rank/rank')
const Search = () => import('components/search/search')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
