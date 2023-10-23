import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      //   state.counter++;
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      console.log('state', state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log('context', context);
      context.commit('increase', payload);
    },
  },
  getters: {
    testAuth(state, _, rootState, rootGetters) {
      console.log('rootState', rootState);
      console.log('rootGetters', rootGetters);
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(state) {
      const finalCounter = state.counter * 3;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      // counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    // 이건 내가 한 방식
    // logIn(state) {
    //   state.isLoggedIn = true;
    // },
    // logOut(state) {
    //   state.isLoggedIn = false;
    // },
    setAuth(state, payload) {
      console.log('here?', state.counter);
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    //내가 한 방식
    // logIn(context) {
    //   context.commit('logIn');
    // },
    // logOut(context) {
    //   context.commit('logOut');
    // },

    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
