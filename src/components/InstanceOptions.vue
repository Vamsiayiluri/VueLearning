<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  initialCount: Number,
});
const emit = defineEmits(["onChange"]);

const count = ref(0);
const requiredCount = ref(0);
const increaseCount = () => {
  count.value += 1;
  emit("onChange", count.value);
};

const computedCount = computed(() => count.value + requiredCount.value);

watch(count, (newValue) => {
  requiredCount.value = newValue * 2;
});

onMounted(() => {
  count.value = props.initialCount;
});
</script>

<template>
  <p>Current component: A</p>
  <span>count: {{ count }}</span
  ><br />

  <span>Required count: {{ requiredCount }} </span><br />
  <span> Final Count : {{ computedCount }} </span><br />

  <button @click="increaseCount">Increase count</button>
</template>
