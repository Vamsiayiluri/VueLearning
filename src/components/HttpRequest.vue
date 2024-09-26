<script setup>
import { ref } from "vue";
import axios from "axios";
const data = ref(null);
const fData = ref(null);

const current = ref(null);
const fetchDataByAxios = async () => {
  data.value = await axios.get("https://random-data-api.com/api/v2/users");
};
const fetchData = async () => {
  const response = await fetch("https://random-data-api.com/api/v2/users");
  fData.value = await response.json();
};
</script>

<template>
  <label
    ><input type="radio" v-model="current" :value="'fetch'" /> Get Data using
    Fetch</label
  >
  <label
    ><input type="radio" v-model="current" :value="'axios'" /> Get data using
    axios</label
  >
  <div v-if="current === 'axios'">
    <h1>Using Axios</h1>
    <p>Click the button to fetch data with an HTTP request.</p>
    <p>Each click generates an object with a random user</p>

    <button @click="fetchDataByAxios">Fetch data</button>
    <div v-if="data" id="dataDiv">
      <img :src="data.data.avatar" alt="avatar" />
      <pre>{{ data.data.first_name + " " + data.data.last_name }}</pre>
      <p>"{{ data.data.employment.title }}"</p>
    </div>
  </div>
  <div v-if="current === 'fetch'">
    <h1>Using Fetch</h1>
    <p>Click the button to fetch data with an HTTP request.</p>
    <p>Each click generates an object with a random user.</p>
    <button @click="fetchData">Fetch data</button>
    <div v-if="fData" id="dataDiv">
      <img :src="fData.avatar" alt="avatar" />
      <pre>{{ fData.first_name + " " + fData.last_name }}</pre>
      <p>"{{ fData.employment.title }}"</p>
    </div>
  </div>
</template>
