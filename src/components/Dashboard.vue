<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import {
  useState,
  useActions,
  useGetters,
} from "vuex-composition-helpers/dist";
const store = useStore();
const dashboardData = computed(() => store.getters.dashboardData);
const { profileData } = useGetters(["profileData"]);
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Users: {{ dashboardData.stats.users }}</p>
    <p>Sales: {{ dashboardData.stats.sales }}</p>
    <p>Products: {{ dashboardData.stats.products }}</p>
    <p>Name: {{ profileData.name }}</p>
    <p>Email: {{ profileData.email }}</p>
    <p>Role: {{ profileData.role }}</p>
  </div>
</template>


