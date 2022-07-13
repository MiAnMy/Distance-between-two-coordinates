<script setup>
import { reactive } from "vue";
import MyForm from "./components/MyForm.vue";
import MyDistance from "./components/MyDistance.vue";

const distance = reactive({
  km: null,
  m: null
});

const onSubmit = ({ km, m }) => {
  distance.km = km;
  distance.m = m;
};
</script>

<template>
  <MyForm @on-sumbit="data => onSubmit(data)" />
  <MyDistance v-bind="distance" />
</template>

<style>
#app {
  padding-top: 10px;
}
</style>
