export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Navigating from:", from.fullPath, "to:", to.fullPath);
  const isAuthenticated = false;
  if (!isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});
