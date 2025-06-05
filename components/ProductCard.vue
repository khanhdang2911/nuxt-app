<template>
    <div>
      <NuxtLink :to="`/products/${product.id}`" class="block">
        <img :src="product.image" alt="product" class="w-full h-48 object-cover mb-4 rounded">
        <h2 class="text-lg font-semibold">{{ product.title }}</h2>
        <p class="text-blue-600 font-bold mt-2">${{ product.price }}</p>
      </NuxtLink>
    </div>

</template>

<script setup lang="ts">
import type { Product } from '~/pages/products/index.vue';
const {product} = defineProps<{ product: Product }>();

</script>
