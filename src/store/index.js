/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import login from '../utils/login';
import request from '../utils/request';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      openid: '',
      nickName: '',
      avatarUrl: '',
      gender: 0,
      country: '',
      province: '',
      city: '',
    },
    draft: null,
  },
  mutations: {
    setUserInfo(state, { user }) {
      state.user = user;
    },
    setDraft(state, draft) {
      state.draft = draft;
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      await login();
      const user = await request.get('/user');
      commit('setUserInfo', { user });
    },
    async updateUserInfo({ commit }, { user }) {
      const updated = await request.put('/user', user);
      commit('setUserInfo', { user: updated });
    },
  },
});

export default store;
