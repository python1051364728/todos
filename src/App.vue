<template>
  <div>
    <section class="todoapp">
      <!-- 头部 -->
      <Header></Header>
      <!-- 列表 -->
      <section class="main">
        <Main></Main>
      </section>
      <!-- 尾部 -->
      <footer class="footer">
        <Footer></Footer>
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
import Header from "@/views/Header";
import Main from "@/views/Main";
import Footer from "@/views/Footer";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      // todos: ["吃饭", "睡觉", "写代码"],
    };
  },

  methods: {},
};
</script>

<style></style>
