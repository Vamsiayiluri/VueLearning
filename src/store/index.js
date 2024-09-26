// store.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      selectedContent: "Dashboard",
      dashboardData: {
        stats: {
          users: 100,
          sales: 200,
          products: 50,
        },
      },
      profileData: {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
      },
    };
  },

  mutations: {
    setSelectedContent(state, content) {
      console.log(content, "data");
      state.selectedContent = content;
    },
    updateProfileData(state, profileData) {
      console.log(profileData);
      state.profileData = profileData;
    },
  },
  actions: {
    selectContent({ commit }, content) {
      commit("setSelectedContent", content);
    },
    saveProfileData({ commit }, profileData) {
      console.log(profileData);

      commit("updateProfileData", profileData);
    },
  },
  getters: {
    selectedContent(state) {
      return state.selectedContent;
    },
    dashboardData(state) {
      return state.dashboardData;
    },
    profileData(state) {
      return state.profileData;
    },
  },
});

export default store;
