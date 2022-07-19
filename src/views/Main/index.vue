<template>
  <div>
    <input class="toggle-all" id="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in todos" :key="index">
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
    ...mapState(["todos"]),
    isAll: {
      set(checkbox) {
        this.todos.forEach((item) => (item.isDone = checkbox));
      },
      get() {
        return this.todos.every((item) => item.isDone === true);
      },
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
