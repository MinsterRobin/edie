import VueRouter from "vue-router";
import Home from "@/views/Home";

export default new VueRouter({
    mode: 'history',
    scrollBehavior (to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
                // , offset: { x: 0, y: 10 }
            }
        }
    },
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
});