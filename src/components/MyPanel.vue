<template>
  <div class="panel">
    <div class="panel-header">
      <slot name="header" />
    </div>
    <div>
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped>
.panel {
  width: 250px;
  padding: 25px;
  margin: 10px;
  box-sizing: border-box;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
}

.panel-header {
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 1px;
}
</style>
