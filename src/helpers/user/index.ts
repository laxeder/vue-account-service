import router from '@/router/index'

export function useUser() {
  function createUser() {
    router.push({ name: 'user-create' })
  }

  return { createUser }
}
