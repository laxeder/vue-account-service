<script setup lang="ts">
import { computed } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { useTitleStore } from '@/stores/app'

const emit = defineEmits(['onHome', 'onLogin', 'onLeave'])
const isLoading = defineModel('isLoading', { type: Boolean })
const { title } = useTitleStore()
const auth = useAuthStore()

const loginButtonValue = computed(() => {
  if (isLoading.value) return 'Carregando...'
  if (!auth.isAuthenticated) return 'Entrar'
  return 'Sair'
})

//TODO Arrumar funçõe
//TODO: Criar botão com spinner em componente separado
const loginButton = {
  onClick: () => {
    if (!auth.isAuthenticated) {
      emit('onLogin')
      return
    }

    emit('onLeave')
  }
}
</script>

<template>
  <header>
    <div class="header-left">
      <div class="header-left-child" @click="$emit('onHome')">
        <img class="logo" src="@/assets/logo.svg" />
        <a class="title">{{ title }}</a>
      </div>
    </div>
    <div class="header-right">
      <button
        class="login-button"
        :disable="isLoading"
        @click="loginButton.onClick"
        v-html="loginButtonValue"
      ></button>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left-child {
  display: flex;
  align-items: center;
}

.header-right {
  margin-left: auto;
}

.title {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-heading);
  cursor: pointer;
}

.login-button {
  padding: 8px 12px;
  background-color: #252525;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.64);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 200;
}

.logo {
  width: 32px;
  height: 32px;
  font-size: medium;
  margin-right: 10px;
  cursor: pointer;
}
</style>
