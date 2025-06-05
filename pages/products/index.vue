<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 text-green-400">All products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in products" :key="product.id" class="border p-4 rounded-lg shadow-md">
        <NuxtLink :to="`/products/${product.id}`" class="block">
          <h2 class="text-lg font-semibold">{{ product.title }}</h2>
        </NuxtLink>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-blue-600 font-bold mt-2">${{ product.price }}</p>
      </div>
  </div>
</div></template>

<script setup lang="ts">
definePageMeta({
  layout:'products'
})
interface Product {
  id: number
  title: string
  description: string
  price: number
}

const { data } = await useFetch<{ products: Product[] }>('https://dummyjson.com/products')
const products = computed(() => data.value?.products ?? [])
</script>

<style scoped>

</style>
