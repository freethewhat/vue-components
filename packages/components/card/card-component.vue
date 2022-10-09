<template>
  <div class="ftw-card">
    <div class="ftw-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="ftw-card_body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: String,
});
</script>

<style scoped>
.ftw-card {
  padding: 20px;
  width: 200px;
  height: 200px;

  border: 1px solid black;
  border-radius: 5px;
}
</style>
