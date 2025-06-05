<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-5xl font-bold text-red-600 mb-4">Error {{ error.statusCode }}</h1>
    <p class="text-lg text-gray-700 mb-6">{{ error.message }}</p>
    <button
      class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      @click="handleClearError"
    >
      Go to home
    </button>
  </div>
</template>

<script setup lang="ts">
  interface ErrorProps {
    error: {
      statusCode: number;
      message: string;
    }
  }
defineProps<ErrorProps>();
const handleClearError = () => {
    clearError({redirect: '/'})
  }
</script>
