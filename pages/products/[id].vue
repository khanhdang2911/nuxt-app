<template>
  <div>
    <h1 class="font-bold text-xl">Product detail:</h1>
    <ProductDetail :product="product"/>
</div></template>

<script setup lang="ts">
  import type { Product } from '~/interfaces/Product'
  const route = useRoute();
  const productId = ref(route.params.id as string);


  const uri = `https://fakestoreapi.com/products/${productId.value}`
  const { data } = await useFetch(uri, { key: `product-${productId.value}` });
  const product: Product = data.value as Product || {}
  if (!product.id) {
    throw createError({
        statusCode: 404,
        message: 'Product not found, please try another one.',
        fatal: true
      })
  }
  useHead({
      title: `Product | ${product.title}`
    })
</script>
