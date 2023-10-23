<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
  <p>{{ isTestAuth }}</p>
</template>
<script>
// import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex';
export default {
  computed: {
    //     isLoggedIn() {
    //       return this.$store.state.isLoggedIn;
    //     },
    // ...mapGetters(['userIsAuthenticated']),
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    },
  },
  methods: {
    // ...mapActions(['logIn', 'logOut']),
    // ...mapActions(['login', 'logout']), 이렇게 해도 되고 아래처럼 직접 추가해도된다.
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
