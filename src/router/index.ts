import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.path.startsWith('/users')) {
    if (!auth.isLogged) {
      return { name: 'home' }
    }
  }

  return true
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
  alias: ['/users'],
  props: (route) => {
    return { id: route.params.id || 'Sem Nome' }
  },
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
