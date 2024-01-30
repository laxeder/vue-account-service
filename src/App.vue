<script setup lang="ts">
import { ref } from "vue"

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore()

const isLoading = ref(false)

const onHome = () => {
  console.log("Return to home")
}

const onLogin = () => {
  console.log("Logging...")
  isLoading.value = true;
  setTimeout(() => {
    auth.isLogged = true;
    isLoading.value = false;
    console.log("Logged!")
  }, 1000)
}

const onLeave = () => {
  console.log("Leaving...")
  isLoading.value = true;
  auth.isLogged = false;
  setTimeout(() => {
    auth.isLogged = false;
    isLoading.value = false;
    console.log("Leaved!")
  }, 1000)
}

</script>

<template>
  <header-component v-model:isLoading="isLoading" @on-home="onHome" @on-login="onLogin" @on-leave="onLeave" />
</template>

<style>
#app {
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 100%
}

body,
html {
  align-items: flex-start;
  background-color: #fff;
  width: 100%;
}
</style>