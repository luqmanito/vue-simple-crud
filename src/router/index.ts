// Composables
import { KEY_TOKEN } from "@/const/CommonConst";
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Login",
        beforeEnter: function (
          to: RouteLocationNormalized,
          from: RouteLocationNormalized,
          next: NavigationGuardNext
        ) {
          const data = localStorage.getItem(KEY_TOKEN);
          if (data) {
            next("/dashboard");
          } else {
            next();
          }
        },
        component: () => import("@/views/auth/Login.vue"),
      },
    ],
  },

  {
    path: "/dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/auth/Register.vue"),
  },
  {
    path: "/products",
    component: () => import("@/views/products/List.vue"),
  },
  {
    path: "/products/:id",
    component: () => import("@/views/products/Add.vue"),
    props: true,
  },
  {
    path: "/error/:code",
    component: () => import("@/views/errors/ErrorManager.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
