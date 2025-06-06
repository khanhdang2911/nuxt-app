<template>
  <div>
    <h1>Welcome to My Vue App - About page</h1>
    <p>This is a simple Vue.js application.</p>
    <p class="post-content mb-6">
      <span class="post-title block text-xl font-bold text-gray-800">{{ post.title }}</span>
      <span class="post-body block text-base text-gray-600 mt-2">{{ post.body }}</span>
    </p>
    <footer>
      <p>&copy; 2023 My Vue App</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../interfaces/Post';

const response = await useFetch('/api/posts/1')
const post = (response.data.value as unknown) as Post || {}
</script>
