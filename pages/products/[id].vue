<template>
  <div>
    <h1 class="font-bold text-xl">Product detail:</h1>
    <ProductDetail :product="product"/>
</div></template>

<script setup lang="ts">
import type { Product } from '~/interfaces/Product'
const route = useRoute();
const productId = ref(route.params.id as string);

const product = reactive<Product>({
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
});
onMounted(async () => {
  const uri = `https://fakestoreapi.com/products/${productId.value}`
  const { data } = await useFetch(uri, { key: `product-${productId.value}` });
  if (!data.value) {
    throw createError({
      statusCode: 404,
      message: 'Product not found, please try another one.',
      fatal: true
    })
  }
  Object.assign(product, data.value || {});
})
</script>
