import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

router.addRoute({
  name: 'home',
  path: '/',
  alias: ['/casa', '/inicial'],
  component: HomeView
})

router.addRoute({
  path: '/home',
  redirect: { name: 'home' }
})

router.addRoute({
  name: 'users',
  path: '/users/:id',
  props: true,
  component: () => import('@/views/UserView.vue'),
  children: [
    {
      path: 'create',
      name: 'user-create',
      component: () => import('@/components/user/CreateUser.vue')
    }
  ]
})

router.addRoute({
  name: 'not-found',
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/NotFound.vue')
})

export default router
