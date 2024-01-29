<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue"
</script>

<template>
  <HeaderComponent />
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