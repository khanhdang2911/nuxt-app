<template>
  <div>
    <h1>Product detail: {{ productId }}</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const productId = route.params.id
definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>
