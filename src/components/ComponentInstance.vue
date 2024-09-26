<script setup>
import CompomemtInstanceChild from "./ComonentInstanceChild.vue";


const data= ref(null)
</script>
<template>
  <h2>Example $attrs Object</h2>
  <p>
    There are three elements on the root level of the component, and
    v-bind="$attrs" adds the "pink" id fallthrough attribute to the p-tag.
  </p>
  <div>
    <CompomemtInstanceChild id="pink" />
  </div>


  <div>
    <h2>Example $el Object</h2>
    <p>Using the $el object to change the background color root DIV tag.</p>
    <button v-on:click="changeColor">Click here</button>
  </div>
</template>


<style scoped>
div {
  border: solid black 1px;
  padding: 0 10px;
  width: 250px;
}
</style>    


