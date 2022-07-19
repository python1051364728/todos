import Vue from "vue";
import Vuex from "vuex";
import { nanoid } from "nanoid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // todos: ["吃饭", "睡觉", "写代码"],
    todos: [
      { id: 100, name: "吃饭", isDone: true },
      { id: 201, name: "睡觉", isDone: false },
      { id: 103, name: "打豆豆", isDone: true },
    ],
  },
  getters: {},
  mutations: {
    addTodo(state, todo) {
      const todoType = {
        id: nanoid,
        name: todo,
        isDone: false,
      };
      state.todos.push(todoType);
    },
  },
  actions: {},
  modules: {},
});
