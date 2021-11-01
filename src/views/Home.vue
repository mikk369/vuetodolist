<template>
  <div class="home container">
    <Calculate msg="Welcome to Your Vue.js App" />
    <TodoList title="My todo list" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculate from "@/components/Calculate.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    Calculate,
    TodoList,
  },
};
</script>
