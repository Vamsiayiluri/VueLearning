<script setup>
import { ref } from 'vue'
const msg = ref('')
</script>

<template>
  <p>Current component: B b</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
</template>
