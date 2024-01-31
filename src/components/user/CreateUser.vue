<script setup lang="ts">
import router from '@/router'

function onCreateUser() {
  router.go(-1)
}
</script>

<template>
  <main>
    <div class="content">
      <p class="title">Criar usuário</p>
      <div class="line"><br /></div>
      <div class="form">
        <div class="form-content">
          <p>[Editar nome...]</p>
          <div style="width: 100%; justify-content: flex-end; display: flex">
            <button class="create-user-button" @click="onCreateUser">Criar usuário</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-self: center;
  background-color: rgb(0, 0, 0, 0.4);
}

.content {
  min-width: 50%;
  width: auto;
  box-shadow: 0 4px 8px rgb(0, 0, 0, 1);
  border: none;
  border-radius: 8px;
  background-color: var(--color-background);
}

.line {
  height: 0.5rem;
  background-color: var(--color-background);
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.7);
  margin-bottom: 16px;
}

.form {
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background-color: var(--color-background);
}

.form-content {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--color-heading);
}

.create-user-button {
  padding: 8px 12px;
  background-color: #202020;
  margin-top: 32px;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.64);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 200;
}
</style>
