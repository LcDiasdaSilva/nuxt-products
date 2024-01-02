<style>
.home-page {
  padding-top: 5rem;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 1rem 1rem 5rem 2rem ;
}
</style>
<template>
  <div class="home-page">
    <client-only>
      <VideoBanner :src="video" />
      <Carousel class="mt-10 mb-10" height="800px" :items="items"> </Carousel>
      <ProductsGrid :products="products" class="mt-10" />
    </client-only>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "LC | NIKE",
  description: "Galeria de produtos",
});
const windowSize = inject("windowSize");

const products = ref([]);

onMounted(async () => {
  const response = await $fetch("/api/products");
  products.value = response;
});

const video = computed(() => {
  if (windowSize.width > 600) return "/video.mp4";
  return "m-video.mp4";
});

const items = computed(() => {
  if (windowSize.width > 600) return ["/chuteiras.avif", "/runner.avif"];
  return ["/m-chuteiras.avif", "/m-runner.avif"];
});
</script>
