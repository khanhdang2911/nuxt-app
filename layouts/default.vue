<template>
  <div>
    <header class="bg-gray-100 shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Sample app</h1>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <NuxtLink
                to="/"
                class="text-blue-400 hover:text-blue-800 font-medium pb-1"
                active-class="border-b-2 border-blue-700 text-blue-700"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-blue-400 hover:text-blue-800 font-medium pb-1"
                active-class="border-b-2 border-blue-700 text-blue-700"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/products"
                class="text-blue-400 hover:text-blue-800 font-medium pb-1"
                active-class="border-b-2 border-blue-700 text-blue-700"
              >
                Products
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container mx-auto px-4 py-8">
      <slot />
    </div>
  </div>
</template>

<script>
</script>
