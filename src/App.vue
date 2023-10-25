<script setup lang="ts">
import VueXSocketio from './components/VueXSocketio.vue'
</script>

<template>
  <div>
    <a href="https://github.com/ljhsai/Vue-Socket.io" target="_blank">
      <img src="/logo.png" class="logo" alt="vue-x-socketio logo" />
    </a>
  </div>
  <VueXSocketio />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
