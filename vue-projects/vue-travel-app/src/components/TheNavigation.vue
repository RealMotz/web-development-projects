<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav id="nav">
        <RouterLink id="logo" to="/">Travel App</RouterLink>
        <RouterLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
        >{{ destination.name }}</RouterLink>
    </nav>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>