export default defineNuxtRouteMiddleware((to, from) => {
  const token = useState("token");

  if (!token.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
