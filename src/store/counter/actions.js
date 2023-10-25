export default {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log('context', context);
    console.log('payload', payload);
    context.commit('increase', payload);
  },
};
