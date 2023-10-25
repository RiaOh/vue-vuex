export default {
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
};
