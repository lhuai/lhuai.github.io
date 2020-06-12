import {getUserData, updateUserInfo} from "../../tools";

export default {
  state: {
    // 用户信息
    userInfo: getUserData()
  },
  actions: {
    // 用户信息
    setUserInfo ({ commit }, data) {
      console.log('datasssss:', data);
      commit("setUserInfo", data);
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = updateUserInfo(data);
    }
  }
}
