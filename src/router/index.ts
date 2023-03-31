import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import IndexPage from "../views/IndexPage.vue";

import store from "./../store/index";


const routes: Array < RouteRecordRaw > = [
    {
        path: "/",
        name: "index",
        component: IndexPage,
    },
    {
        path: "/place-list",
        name: "place-list",
        component: () => import("@/views/PlaceList.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        beforeEnter: () => {
            if (!store.state.user.loggedIn) {
                router.push('/sign-in');
            }
        },
        component: () => import("@/views/Profile.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/Search.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/RegisterPage.vue"),
    },
    {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("@/views/SignIn.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;