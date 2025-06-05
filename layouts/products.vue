<template>
  <div>
    <header>
      <h1>Products</h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <slot/>
    </div>
  </div>

</template>

<script>

</script>

<style lang="scss" scoped>

</style>
