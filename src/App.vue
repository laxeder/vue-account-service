<script setup lang="ts">
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import router from '@/router'

const auth = useAuthStore()

const isLoading = ref(false)

const onHome = () => {
  router.push('/')
}

const onLogin = () => {
  isLoading.value = true

  setTimeout(() => {
    auth.isLogged = true

    const { href } = router.resolve({ name: 'users', params: { id: 'Carlos' } })

    router.push(href)

    isLoading.value = false
  }, 1000)
}

const onLeave = () => {
  isLoading.value = true
  auth.isLogged = false

  setTimeout(() => {
    auth.isLogged = false

    router.push('/')

    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <header-component
    v-model:isLoading="isLoading"
    @on-home="onHome"
    @on-login="onLogin"
    @on-leave="onLeave"
  />
  <main-component> </main-component>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
}
</style>
