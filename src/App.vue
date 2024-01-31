<script setup lang="ts">
import { ref } from "vue"

import { useAuthStore } from "@/stores/auth";
import router from "./router";

const auth = useAuthStore()

const isLoading = ref(false)

const onHome = () => {
  console.log("Return to home")
  router.push("/")
}

const onLogin = () => {
  console.log("Logging...")
  isLoading.value = true;
  setTimeout(() => {
    auth.isLogged = true;
    router.push("/about")
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
    router.push("/")
    isLoading.value = false;
    console.log("Leaved!")
  }, 1000)
}

</script>

<template>
  <header-component v-model:isLoading="isLoading" @on-home="onHome" @on-login="onLogin" @on-leave="onLeave" />
  <main-component></main-component>
</template>

<style>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 100%
}

body,
html {
  width: 100%;
}
</style>