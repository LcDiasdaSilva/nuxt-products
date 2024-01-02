
import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/HomePage.vue').then(r => r.default || r),
    },
    {
      name: 'product',
      path: '/product',
      component: () => import('../pages/ProductPage.vue').then(r => r.default || r),
    },
  ],
}