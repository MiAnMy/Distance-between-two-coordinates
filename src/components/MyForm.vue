<script setup>
import { reactive } from "vue";
import MyInput from "./MyInput.vue";
import MyPanel from "./MyPanel.vue";
import MySubmit from "./MySubmit.vue";

const emit = defineEmits(["onSumbit"]);
const p1 = reactive({
  latitude: 0,
  longitude: 0,
});

const p2 = reactive({
  latitude: 0,
  longitude: 0,
});

const onSubmit = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/lat1=${p1.latitude}&lon1=${p1.longitude}&lat2=${p2.latitude}&lon2=${p2.longitude}`
    );

    const data = await response.json();

    emit("onSumbit", data);
  } catch (e) {
    console.error(e);
  } finally {
  }
};
</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form-body">
      <MyPanel>
        <template v-slot:header>
          <span>Point 1</span>
        </template>
        <template v-slot:body>
          <MyInput
            label="Latitude 1"
            :max="90"
            :min="-90"
            @on-change="(value) => (p1.latitude = value)"
          />
          <MyInput
            label="Longitude 1"
            :max="180"
            :min="-180"
            @on-change="(value) => (p1.longitude = value)"
          />
        </template>
      </MyPanel>
      <MyPanel>
        <template v-slot:header>
          <span>Point 2</span>
        </template>
        <template v-slot:body>
          <MyInput
            label="Latitude 2"
            :max="90"
            :min="-90"
            @on-change="(value) => (p2.latitude = value)"
          />
          <MyInput
            label="Longitude 2"
            :max="180"
            :min="-180"
            @on-change="(value) => (p2.longitude = value)"
          />
        </template>
      </MyPanel>
    </div>

    <div class="form-footer">
      <MySubmit />
    </div>
  </form>
</template>

<style scoped>
.form-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.form-footer {
  display: flex;
  justify-content: center;
}
</style>
