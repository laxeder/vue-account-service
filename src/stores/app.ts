import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTitleStore = defineStore('app-title', () => {
  const title = ref('Account Service')

  return { title }
})
