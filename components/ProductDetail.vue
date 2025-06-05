<template>
  <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
    <img :src="product.image" alt="product" class="w-full object-cover mb-4 rounded">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">{{ product.title }}</h2>
    <p class="text-xl text-blue-600 font-semibold mb-4">${{ product.price }}</p>
    <p class="text-gray-600 mb-2">{{ product.description }}</p>
    <h3 class="text-lg font-medium text-gray-700 mb-2">Category: {{ product.category }}</h3>
    <div class="mt-4">
      <span class="text-yellow-500">
        <i v-for="n in Math.floor(product.rating.rate)" :key="n" class="fas fa-star"/>
      </span>
      <span class="text-gray-500">({{ product.rating.count }} reviews)</span>
  </div>
</div></template>

<script setup lang="ts">
import type { Product } from '~/interfaces/Product'
const { product } = defineProps<{ product: Product }>()
</script>
