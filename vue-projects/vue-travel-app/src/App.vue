<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header>
    <TheNavigation />
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>