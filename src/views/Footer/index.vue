<template>
  <div>
    <span class="todo-count">
      <!-- v-text="remaining" -->
      <strong></strong> 3条未完成
    </span>
    <ul class="filters">
      <li>
        <!-- visibility -->
        <a href="#/all" class="selected">全部清单</a>
      </li>
      <li>
        <a href="#/active" class="selected">未完成</a>
      </li>
      <li>
        <a href="#/completed" class="selected">已完成</a>
      </li>
    </ul>
    <!-- v-show="todos.length > remaining" -->
    <button class="clear-completed" @click="removeCompleted">
      Clear completed
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    removeCompleted() {},
  },
};
</script>

<style></style>
