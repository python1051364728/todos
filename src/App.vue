<template>
  <div>
    <section class="todoapp">
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
      <section class="main">
        <input class="toggle-all" id="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" v-for="(item, index) in todos" :key="index">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="changeTodo" />
              <label @dblclick="editTodo(item)">{{ item }}</label>
              <button class="destroy" @click="removeTodo(item)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong v-text="remaining"></strong> 3条未完成
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: visibility == 'all' }"
              >全部清单</a
            >
          </li>
          <li>
            <a href="#/active" :class="{ selected: visibility == 'active' }"
              >未完成</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibility == 'completed' }"
              >已完成</a
            >
          </li>
        </ul>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>双击可以编辑待办事项</p>
      <p>编写人 <a href="https://github.com/python1051364728">Zou Bo</a></p>
      <p>部分参考 <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  data() {
    return {
      todos: ["吃饭", "睡觉", "写代码"],
      todo: "",
      changeTodo: "",
    };
  },
  computed: {
    // ...mapState(['todos'])
  },
  methods: {
    addTodo() {
      // this.$store.commit('addTodo',this.todo)
      // const todo = {
      //   this.todo
      // }
      this.todos.push(this.todo);
    },
  },
  watch: {
    todos: {},
  },
};
</script>

<style></style>
