<script setup>
defineProps({
  km: {
    type: Number
  },
  m: {
    type: Number
  }
});
</script>

<template>
  <p class="distance" v-if="typeof km === 'number'">
    The distance is: {{ km.toFixed(2) }} Kilometers or {{ m.toFixed(2) }} Meters
  </p>
</template>

<style scoped>
.distance {
  text-align: center;
}
</style>
