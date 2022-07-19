<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="准备做什么？"
      autofocus
      v-model="todo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    addTodo() {
      if (this.todo.trim() === "") {
        this.todo = "";
        return alert("不能为空");
      }
      this.$store.commit("addTodo", this.todo);
      this.todo = "";
      // this.todos.push(this.todo);
    },
  },
};
</script>

<style></style>
