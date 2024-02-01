<script setup lang="ts">
import { useUser } from '@/helpers/user'

const { id } = defineProps(['id'])

const { createUser } = useUser()
</script>

<template>
  <header>
    <h1>Olá {{ id }}!</h1>
    <h1>Oque deseja fazer?</h1>
    <button class="create-user-button" @click="createUser">Criar usuário</button>
  </header>
  <main>
    <div class="child">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.child {
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  width: auto;
}

h1 {
  width: 100%;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  color: hsla(160, 100%, 37%, 1);
}

.create-user-button {
  margin-top: 36px;
  padding: 8px 12px;
  background-color: #202020;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.64);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 200;
}
</style>
