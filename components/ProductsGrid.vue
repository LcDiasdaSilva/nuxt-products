<style  >
.galeria-produtos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
}
</style>
<template>
  <div class="galeria-produtos">
    <v-card v-for="(product, i) in products" :key="i">
      <img style="width: 100%" :src="`/products/${product.code}.avif`" />
      <v-card-title> {{ product.name }} </v-card-title>
      <v-card-subtitle> {{ product.type }} </v-card-subtitle>
      <v-card-text> {{ formatPrice.format(product.price) }} </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
interface Product {
id: number,
name: string,
type: string,
price:number,
code:string,
createdAt: string
}

const props = defineProps<{
  products: Product[];
}>();

const formatPrice = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
</script>
