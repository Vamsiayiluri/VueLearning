<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="child-component">
    <h1>Child Component</h1>
    <slot></slot>

    <slot name="header">
      <p>Default Header Content</p>
    </slot>

    <slot name="content">
      <p>Default Content</p>
    </slot>

    <slot name="footer">
      <p>Default Footer Content</p>
    </slot>
  </div>

  <p></p>
</template>
