<template>
  <!-- <button @click="addOne">Add 2</button> -->
  <!-- <button @click="increment">Add 2</button> -->
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.state.counter++;
    //   this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    // ...mapActions({ inc: 'increment', increase: 'increase' }),
    // ...mapActions('numbers', ['increment', 'increase']),
    ...mapActions('numbers', { inc: 'increment', increase: 'increase' }),
  },
};
</script>
