import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: ["吃饭", "睡觉", "写代码"],
  },
  getters: {},
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {},
  modules: {},
});
