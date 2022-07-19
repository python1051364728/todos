<template>
  <div>
    <span class="todo-count">
      <!-- v-text="remaining" -->
      <strong></strong> {{ shengyu }}条未完成
    </span>
    <ul class="filters">
      <li v-for="item in lis" :key="item.id">
        <!-- visibility -->
        <a
          @click="slect(item)"
          href="#/all"
          :class="{ selected: item.isSelected }"
          >{{ item.name }}</a
        >
      </li>
      <!-- <li>
        <a href="#/active" class="selected">未完成</a>
      </li>
      <li>
        <a href="#/completed" class="selected">已完成</a>
      </li> -->
    </ul>
    <!-- v-show="todos.length > remaining" -->
    <button class="clear-completed" @click="removeCompleted">
      清除已完成todo
    </button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lis: [
        {
          id: uuidv4(),
          name: "全部",
          isSelected: true,
        },
        {
          id: uuidv4(),
          name: "未完成",
          isSelected: false,
        },
        {
          id: uuidv4(),
          name: "已完成",
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    removeCompleted() {
      this.$store.commit("chearCompleted");
    },
    slect(item) {
      this.lis.forEach((i) => (i.isSelected = i === item));
      console.log(item.name);
      this.$store.commit("changeSelect", item.name);
    },
  },
  computed: {
    ...mapState(["todos"]),
    shengyu() {
      return this.todos.reduce((pre, curr) => {
        if (curr.isDone === false) {
          pre += 1;
        }
        return pre;
      }, 0);
    },
  },
};
</script>

<style></style>
