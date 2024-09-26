<script setup>
import { ref } from "vue";
const msg = ref("");
const someMethod = () => {
  alert("Child component method called!");
};
defineExpose({ someMethod });
</script>



<template>
  <div>
    <p>I'm a child component!</p>
  </div>
</template>

