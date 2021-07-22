import Vue from "vue";

export const store = Vue.observable({
    isMobileNavOpen: false
});

export const mutations = {
    setIsMobileNavOpen(yesno) {
        store.isMobileNavOpen = yesno;
    },
    toggleMobileNav() {
        store.isMobileNavOpen = !store.isMobileNavOpen;
    }
};