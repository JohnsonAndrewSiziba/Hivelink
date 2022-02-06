import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "@/views/About";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/our-work',
    name: 'OurProjects',
    component: () => import('../views/OurWork.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
