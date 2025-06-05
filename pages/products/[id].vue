<template>
  <div>
    <h1>Product detail: {{ productId }}</h1>
    <div v-if="product">
      <h2 class="text-2xl font-bold mb-4">{{ product.title }}</h2>
      <p class="text-gray-600 mb-2">{{ product.description }}</p>
      <p class="text-blue-600 font-bold mb-4">${{ product.price }}</p>
  </div>
</div></template>

<script setup lang="ts">
const route = useRoute();
const productId = ref(route.params.id as string);
interface Product {
  id: number
  title: string
  description: string
  price: number
}
const product = reactive<Product>({
  id: 0,
  title: '',
  description: '',
  price: 0,
})
watch(productId, async (newId) => {
  const uri = `https://dummyjson.com/products/${newId}`
  const { data } = await useFetch(uri)
  Object.assign(product, data.value)
}, { immediate: true })
</script>
<style scoped>

</style>
