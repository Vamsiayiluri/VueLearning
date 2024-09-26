<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Dashboard from "./Dashboard.vue";
import ProfleView from "./ProfileView.vue";

const store = useStore();
const selectedContent = computed(() => store.state.selectedContent);


// const { text } = useState(["selectedContent"]);

// store.commit("setSelectedContent", "text");
onMounted(() => {
  console.log(selectedContent.value);
});
</script>


<!-- Sidebar.vue -->
<template>
  <button @click="store.commit('setSelectedContent', 'Dashboard')">
    Dashboard
  </button>
  <button @click="store.commit('setSelectedContent', 'Profile')">
    Profile
  </button>
  <!-- Add more buttons/icons as needed -->

  <div v-if="selectedContent === 'Dashboard'">
    <Dashboard />
  </div>
  <div v-if="selectedContent === 'Profile'">
    <ProfleView />
  </div>
  <!-- Add more conditional rendering as needed -->
</template>

<style scoped>
</style>


