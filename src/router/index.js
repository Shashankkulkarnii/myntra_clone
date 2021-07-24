import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import categories from '../views/categories.vue'
import electronics from '../views/electronics.vue'
import Jewelery from '../views/Jewelery.vue'
import itemPurchagePage from '../views/ItemPurchacePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/electronics',
    name: 'electronics',
    component: electronics
  },
  {
    path: '/Jewelery',
    name: 'Jewelery',
    component: Jewelery
  },
{
path: '/Jewelery/:id',
name: 'ItemPurchacePage',
component: itemPurchagePage,
props: true
}
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
