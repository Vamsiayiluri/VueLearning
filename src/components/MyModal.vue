<script setup>
import { ref } from "vue";
import CompA from "./CompA.vue";
import CompB from "./CompB.vue";
const msg = ref("");
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const docState = ref('saved')
const current = ref(CompA)


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <button @click="exists = !exists">{{ btnText }}</button> -->
  <!-- <Transition>
    <p v-if="exists">Hello World!</p>
  </Transition>
 -->

  <!-- enter and leave transition css transition -->
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>

  <!-- slide and leave (named transition)-->
  <button @click="show1 = !show1">Toggle Slide + Fade</button>
  <Transition name="slide-fade">
    <p v-if="show1">hello</p>
  </Transition>

  <button @click="show2 = !show2">Toggle</button>
  <Transition name="bounce">
    <p v-if="show2" style="margin-top: 20px; text-align: center">
      Hello here is some bouncy text!
    </p>
  </Transition>
  <!-- active prop -->
  <Transition appear>
    <div :key="text">Hello World!</div>
  </Transition>

  <!-- slide-up between elements -->
  <Transition name="slide-up">
    <button v-if="docState === 'saved'" @click="docState = 'edited'">
      Edit
    </button>
    <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
      Save
    </button>
    <button v-else-if="docState === 'editing'" @click="docState = 'saved'">
      Cancel
    </button>
  </Transition>
  <br />
  <Transition>
    <span :key="count">{{ count }}</span>
  </Transition>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>

  <div class="outer">
    <h3>Vue Teleport Example</h3>
    <Teleport to="body">
      <div id="redDiv">Hello!</div>
    </Teleport>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.v-enter-active {
  transition: opacity 2s ease;
}
.v-leave-active {
  transition: opacity 1s ease;
}
/* .v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
} */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(0.5, 3, 1, 3);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#redDiv {
  background-color: lightcoral;
  margin: 10px;
  padding: 10px;
  display: inline-block;
}
</style>
