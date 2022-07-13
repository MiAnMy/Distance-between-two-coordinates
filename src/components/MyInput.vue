<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["onChange"]);

const id = computed(() => props.label.replace(/ /g, ""));
</script>

<template>
  <label :for="id">
    {{ label }}
    <input
      type="number"
      :min="min"
      :max="max"
      :id="id"
      value="0"
      step="0.000001"
      required
      @change="(e) => emit('onChange', e.target.value)"
    />
  </label>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  font-size: 0.85rem;
  letter-spacing: 0.25px;
}

input {
  color: var(--font-color);
  background-color: transparent;
  border: none;
  font-size: 1em;
  margin: 5px 0px;
  padding: 5px;
  border-bottom: 1px solid var(--border-color);
  outline: none;
}

input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

input:focus {
  border-bottom: 1px solid var(--select-border-color);
}
</style>
