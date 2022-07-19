<template>
  <div>
    <input class="toggle-all" id="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in showList" :key="index">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.isDone" />
          <label @dblclick="editTodo(item)">{{ item.name }}</label>
          <button class="destroy" @click="removeTodo(index)"></button>
        </div>
        <!-- <input
              class="edit"
              type="text"
              v-model="todo"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            /> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      changeTodo: "",
    };
  },
  computed: {
    ...mapState(["todos", "select"]),
    isAll: {
      set(checkbox) {
        this.todos.forEach((item) => (item.isDone = checkbox));
      },
      get() {
        return this.todos.every((item) => item.isDone === true);
      },
    },
    showList() {
      switch (this.select) {
        case "全部":
          return this.todos;
        case "未完成":
          return this.todos.filter((item) => !item.isDone);
        case "已完成":
          return this.todos.filter((item) => item.isDone);
        default:
          return [];
      }
    },
  },
  methods: {
    editTodo(item) {},
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style></style>
