import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category.vue'
import product from '../views/product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:category',
    name: 'category',
    component: category,
    props: true
  },
{
path: '/product/:title',
name: 'product',
component: product,
props: true
}
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
