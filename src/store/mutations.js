export default {
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
};
