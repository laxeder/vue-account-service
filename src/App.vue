<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

import { reactive } from "vue"

const auth = useAuthStore()

const headerModel = reactive({ isLoading: false })

const onHome = () => {
  console.log("Return to home")
}

const onLogin = () => {
  console.log("Logging...")
  headerModel.isLoading = true;
  setTimeout(() => {
    auth.isLogged = true;
    headerModel.isLoading = false;
    console.log("Logged!")
  }, 1000)
}

const onLeave = () => {
  console.log("Leaving...")
  headerModel.isLoading = true;
  auth.isLogged = false;
  setTimeout(() => {
    auth.isLogged = false;
    headerModel.isLoading = false;
    console.log("Leaved!")
  }, 1000)
}

</script>

<template>
  <header-component v-model="headerModel" @on-home="onHome" @on-login="onLogin" @on-leave="onLeave" />
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