<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useTitleStore } from "@/stores/app"

import { computed, reactive, ref } from "vue";

const emit = defineEmits(["onHome", "onLogin", "onLeave"]);

const model = defineModel({ default: { isLoading: false } })
const auth = useAuthStore()
const { title } = useTitleStore()

const loginButton = {
  class: ["login-button"],
  attrs: reactive({
    disabled: model.value.isLoading
  }),
  value: computed(() => {
    if (model.value.isLoading) return "Carregando..."
    if (auth.isLogged) return "Sair"
    return "Entrar"
  }),
  onClick: ref(() => {
    if (model.value.isLoading) return;
    if (auth.isLogged) {
      emit("onLeave")
    } else {
      emit("onLogin")
    }
  })
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
      <button v-bind="loginButton.attrs" v-bind:class="loginButton.class" @click="loginButton.onClick.value"
        v-html="loginButton.value.value"></button>
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

.header-left-child {
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