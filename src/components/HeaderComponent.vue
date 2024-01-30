<script setup lang="ts">
import { ref } from "vue";
import { useTitleStore } from "@/stores/app"

const emit = defineEmits({
  onHome: () => true,
  onLogin: () => true,
  onLeave: () => true,
  changeAuthState(changeAuthState: boolean) {
    return typeof changeAuthState == "boolean"
  }
});

const { title } = useTitleStore()
const props = defineProps({
  isLogged: Boolean
})
const isLogged = ref(props.isLogged)

const onLogin = () => {
  if (!isLogged.value) {
    emit("changeAuthState", true)
    emit("onLogin")
  } else {
    emit("changeAuthState", false)
    emit("onLeave")
  }
}

const setIsLogger = (value: boolean) => {
  isLogged.value = value
}

defineExpose({
  setIsLogger
})

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
      <button v-if="!isLogged" class="login-button" @click="onLogin">Entrar</button>
      <button v-else class="login-button" @click="onLogin">Sair</button>
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