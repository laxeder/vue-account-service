import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

router.addRoute({
  name: 'home',
  path: '/',
  component: HomeView
})

router.addRoute({
  name: 'users',
  path: '/users/:id',
  component: import('@/views/UserView.vue'),
  children: [{
    path: 'create',
    name: "user-create",
    component: import('@/components/user/CreateUser.vue')
  }]
})

router.addRoute({
  name: 'not-found',
  path: '/:pathMatch(.*)*',
  component: import('@/views/NotFound.vue')
})

export default router
