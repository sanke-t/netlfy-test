export const state = () => ({
  topBarColor: 'black',
  topBarLogoType: 'color',
  userMobile: false,
  cf: null,
  scrollY: 0
});
export const mutations = {
  changeTopBarColor(state, color) {
    state.topBarColor = color;
  },
  changeTopBarLogoType(state, color) {
    state.topBarLogoType = color;
  },
  saveCFData(state, cfData) {
    state.cf = cfData;
  },
  changeUserMobile(state, userMobile) {
    state.userMobile = userMobile;
  },
  updateScrollY(state, scrollY) {
    state.scrollY = scrollY;
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    let cfData = await this.$api.cfData.fetchCFData();
    commit('saveCFData', cfData);
  },
  changeTopBarColor({ commit, state }, color) {
    commit('changeTopBarColor', color);
  },
  changeTopBarLogoType({ commit, state }, color) {
    commit('changeTopBarLogoType', color);
  },
  updateScrollY({ commit }, scrollY) {
    commit('updateScrollY', scrollY);
  },
  async getCFData({ commit, state }) {
    let cfData = await this.$api.cfData.fetchCFData();
    commit('saveCFData', cfData);
    return cfData;
  },
  changeUserMobile({ commit, state }, userMobile) {
    commit('changeUserMobile', userMobile);
  },
  changeShowDialog({ commit, state }, showDialog) {
    commit('showDialog', showDialog);
  }
}
export const getters = {
  cf: state => {
    return state.cf;
  },
  topBarColor: state => {
    return state.topBarColor;
  }
}
export const strict = false