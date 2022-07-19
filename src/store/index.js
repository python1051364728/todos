import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import { setLocal, getLocal } from "@/utils/storage";
Vue.use(Vuex);

const todoKey = "todokey";
export default new Vuex.Store({
  state: {
    select: "全部",
    todos: [
      { id: 100, name: "吃饭", isDone: true },
      { id: 201, name: "睡觉", isDone: false },
      { id: 103, name: "打豆豆", isDone: true },
    ],
    // todos: getLocal(todoKey) || [],
  },
  getters: {},
  mutations: {
    // 添加todo
    addTodo(state, todo) {
      const todoType = {
        id: uuidv4(),
        name: todo,
        isDone: false,
      };
      state.todos.push(todoType);
    },

    //  监听数据变化
    jianting(state, newList) {
      state.todos = newList;
      setLocal(todoKey, state.todos);
    },

    // 三种状态（全部，未完成，已完成）的切换
    changeSelect(state, newList) {
      state.select = newList;
    },

    // 清除已完成的todo
    chearCompleted(state) {
      state.todos = state.todos.filter((item) => !item.isDone);
    },
  },
  actions: {},
  modules: {},
});
