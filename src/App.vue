<script setup lang="ts">
import { ref, watch } from "vue"

const header = ref<any>()
const isLogged = ref(false)

const onHome = () => {
  console.log("Return to home")
}

const changeAuthState = (authState: boolean) => {
  console.log("Change auth state to:", authState)
  isLogged.value = authState
}

const onLogin = () => {
  console.log("On logged!")
}

const onLeave = () => {
  console.log("On leaved...")
}

watch(isLogged, (nowValue, oldValue) => {
  if (nowValue == oldValue) return;
  if (!header.value.setIsLogger!) return;

  header.value.setIsLogger(nowValue)
})

</script>

<template>
  <header-component ref="header" @on-home="onHome" @change-auth-state="changeAuthState" @on-login="onLogin" @on-leave="onLeave"
    :isLogged="isLogged" />
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