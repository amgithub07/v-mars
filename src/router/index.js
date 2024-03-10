import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/index",
    name: "home",
    component: () => import("../views/layout/Layout.vue"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../views/home/HomeView.vue"),
      },
    ],
  }
  // {
  //   // 404
  //   path: '/:pathMath(.*)*',
  //   component: () => import('../views/NotFound.vue')
  // },
  // {
  //   // 重新導向
  //   path: '/newPage/:pathMath(.*)*',
  //   redirect: {
  //     name: 'home'
  //   }
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
