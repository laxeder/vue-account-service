<script setup lang="ts">
import { useTitleStore } from "@/stores/app"

const { title } = useTitleStore()

const onLogin = () => {
  //TODO: Criar lógica de login
  console.log("Click: on login")
}

const onHome = () => {
  //TODO: Criar lógica de retornar a tela inicial
  console.log("Click: on home")
}

</script>

<template>
  <header>
    <div class="header-left">
      <img class="logo" @click="onHome" src="@/assets/logo.svg" />
      <a class="title" @click="onHome">{{ title }}</a>
    </div>
    <div class="header-right">
      <button class="login-button" @click="onLogin">Entrar</button>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  margin-left: auto;
}

.title {
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
}

.login-button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  font-size: small;
}

.logo {
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  margin-right: 10px;
  cursor: pointer;
}
</style>
@/stores/app