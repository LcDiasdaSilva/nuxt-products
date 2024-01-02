<style >
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Controla a proporção do vídeo (16:9) */
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
<template>
  <div class="video-container">
    <video :src="src" type="video/mp4" autoplay loop muted playsinline></video>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  src: string;
}>();
</script>
