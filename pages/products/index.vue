<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-green-400">All products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="border p-4 rounded-lg shadow-md">
        <ProductCard :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '~/interfaces/Product'
  definePageMeta({
    layout:'products'
  })

  const products = ref<Product[]>([])
  const { data } = await useFetch<Product[]>('https://fakestoreapi.com/products')
  products.value = data.value || []
</script>
