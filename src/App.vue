<script setup>
import { computed, ref, Transition, shallowRef, onMounted } from "vue";

import BuiltInAttributes from "./components/BuiltInAttributes.vue";
import BuiltInDirectives from "./components/BuiltInDirectives.vue";
import MyModal from "./components/MyModal.vue";
import SideBar from "./components/SideBar.vue";
import HttpRequest from "./components/HttpRequest.vue";
import ComponentInstance from "./components/ComponentInstance.vue";
import InstanceOptions from "./components/InstanceOptions.vue";

import { useRouter } from "vue-router";

// const exists = ref(false);
// const btnText = computed(() => {
//   if (exists.value) {
//     return "Remove";
//   } else {
//     return "Add";
//   }
// });
const show = ref(true);
const show1 = ref(true);
const show2 = ref(true);
const docState = ref("saved");
const router = useRouter();

const count = ref(0);
// const current = shallowRef(CompA)
const goToHome = () => {
  // Programmatic navigation using router.push()
  router.push("/");
};
const goToAbout = () => {
  // Programmatic navigation using router.push()
  router.push("/about");
};
const showCount = (count) => {
  console.log(count);
};
setInterval(() => {
  count.value++;
}, 1000);
</script>

<template>
  <!-- 
  <button @click="goToHome">Go to Home</button>
  <button @click="goToAbout">Go to About</button>

    <router-view></router-view> -->

  <BuiltInDirectives />
  <!-- <HttpRequest></HttpRequest> -->

  <!-- <BuiltInAttributes /> 
  <BuiltInDirectives />-->

  <!-- <MyModal /> -->

  <!-- <SideBar /> -->

  <!-- <div>
    <MyModal />
  </div> -->
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 976px;
  height: 40px;
  left: 272px;
  top: 104px;
}

.text {
  font-size: 16px; /* Adjust font size as needed */
}

.icon {
  font-size: 24px; /* Adjust icon size as needed */
}
</style>


