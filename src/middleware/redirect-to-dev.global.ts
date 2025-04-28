// 🚧🚧 UNDER CONSTRUCTION 🚧🚧
// It is intended to redirect all routes to the /development page in non-development environments.
export default defineNuxtRouteMiddleware((to, from) => {
  if (!import.meta.dev) {
    if (to.path === '/development') {
      return;
    }

    return navigateTo('/development');
  }
});
