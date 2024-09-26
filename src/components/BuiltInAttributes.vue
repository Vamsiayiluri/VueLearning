<script setup>
import { ref, shallowRef } from "vue";
import ChildComponent from "./ChildComponent.vue";
import SlotSample from "./SlotSample.vue";

import CompA from "./CompA.vue";
import CompB from "./CompB.vue";
const show = ref(true);
const child = ref(null);
const current = shallowRef(CompA);
const currentElement = shallowRef("h1");
const myInput = ref(null);
const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);
const toggle = () => {
  show.value = !show.value;
};
const callChildMethod = () => {
  // Access the child component and call its method
  child.value.someMethod();
};
const focusInput = () => {
  // Access the input element using this.$refs
  if (myInput.value) {
    myInput.value.focus();
  } else {
    console.error("myInput ref is not available.");
  }
};
</script>

<template>
  <span>hii </span>
  <div v-for="item in items" :key="item.id">
    <span>{{ item.name }}</span>
  </div>
  <button @click="toggle">Toggle View</button>
  <div v-if="show" key="view1">View 1</div>
  <div v-else key="view2">View 2</div>

  <div>
    <input ref="myInput" type="text" placeholder="Type something" />
    <button @click="focusInput">Focus Input</button>

    <ChildComponent ref="child" />
    <button @click="callChildMethod">Call Child Method</button>
  </div>
  <div>
    <!-- <button @click="currentComponent = 'CompA'">Show Component A</button>
    <button @click="currentComponent = 'CompB'">Show Component B</button> -->
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <!-- Use the 'is' attribute to dynamically switch components -->
    <component :is="current"></component>

    <br />

    <button @click="currentElement = 'h1'">Show H1</button>
    <button @click="currentElement = 'h2'">Show H2</button>
    <button @click="currentElement = 'p'">Show Paragraph</button>

    <!-- Use the 'is' attribute to dynamically switch HTML elements -->
    <component :is="currentElement">This is a dynamic element</component>
  </div>

  <div>
    <h1>Parent Component</h1>
    <SlotSample>Sample example on Slots</SlotSample>

    <SlotSample>
      <template v-slot:header> </template>
      <template v-slot:content>
        <p>Content Slot Content</p>
      </template>

      <template v-slot:footer>
        <p>Footer Slot Content</p>
      </template>
    </SlotSample>
  </div>
</template>
