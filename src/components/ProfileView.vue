<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useState, useActions } from 'vuex-composition-helpers/dist'


const store = useStore();
const profileData = ref({ ...store.getters.profileData });
const { count } = useState(['count'])
const { saveProfileData } = useActions(['saveProfileData'])
// const saveProfile = () => {
//   store.dispatch('saveProfileData', profileData.value);
// };
const saveProfile = () => {
  saveProfileData(profileData.value);
};
</script>

<template>
  <div>
    <h1>Profile</h1>
    <form @submit.prevent="saveProfile">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="profileData.name" type="text" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="profileData.email" type="email" />
      </div>
      <div>
        <label for="role">Role:</label>
        <input id="role" v-model="profileData.role" type="text" />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>



<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

div {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 5px;
  font-size: 1rem;
}

button {
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
