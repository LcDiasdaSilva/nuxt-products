<template>
  <v-carousel hide-delimiters cycle :height="height">
    <v-carousel-item
      v-for="item in items"
      :key="item"
      :src="item"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
defineProps<{
  height: string;
  items: string[];
}>();
</script>
