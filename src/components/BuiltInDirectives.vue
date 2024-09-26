<script setup>
import { ref } from "vue";

const rawHtml = ref("Hello !");
const list = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);
const selected = 1;
const imageSrc = "https://vuejs.org/images/logo.png";
const items = ["Item 1", "Item 2", "Item 3"];
const htmlContent = "<strong>This is bold text</strong>";
const condition = ref("A");
const memoData = ref("This is some memoized data");
const inputValue = ref("");
const count = ref(0);
const raw = "{{ This will not be compiled }}";
const isVisible = ref(true);
const textContent = ref("This is some text content");

// Methods
const handleClick = () => {
  count.value += 1;

  alert("Button clicked!");
};

// Dummy component for v-slot demonstration
const myComponent = {
  template: `<div><slot></slot></div>`,
};
</script>

<template>

<span v-text="rawHtml"></span>
<!-- same as -->
<span>{{rawHtml}}</span>
<p>normal way : {{ rawHtml }}</p>
<p>Using v-html directive: <h1 v-html="rawHtml"></h1></p>

<!-- v-cloak  -->
 <p v-cloak>{{ rawHtml   }}   </p> 


  <span v-once>This will never change: {{msg}}</span>



 <div v-cloak>

    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <div v-html="htmlContent"></div>

    <div v-if="condition === 'A'">Condition A</div>
    <div v-else-if="condition === 'B'">Condition B</div>
    <div v-else>Condition C</div>

    <div v-memo="[memoData]">
      Memoized content that only rerenders if memoData changes: {{ memoData }}
    </div>

    <input v-model="inputValue" placeholder="Type something">

    <button v-on:click="handleClick">Click Me</button>

    <div v-once>This will only be rendered once: {{ count }}</div>

    <div v-pre>{{ raw }}</div>

    <div v-show="isVisible">This is conditionally visible</div>



    <div v-text="textContent"></div>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>