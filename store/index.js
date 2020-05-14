export const state = () => ({
    navbar: {},
    errors: []
});

export const mutations = {
    setNavbar(storeState, navbar) {
        storeState.navbar = navbar;
    },
    addError(storeState, error) {
        storeState.errors.push(error);
    }
};

export const actions = {
    async fetchNavbar({ commit }, $prismic) {
        try {
            const navbar = (await $prismic.api.getSingle("navbar")).data;

            commit("setNavbar", navbar);
        } catch (e) {
            const error = "Please create a navbar document";

            commit("addError", error);
        }
    }
};
