<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>{{ title }}</h2>

        <ul class="list-group mb-3">
          <li v-for="todo in todos" :key="todo" class="list-group-item">
            {{ todo }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input
          v-model="newTodo"
          type="text"
          name="newTodo"
          class="form-control"
        />
      </div>
      <div class="col">
        <button @click="addNewTodo" type="submit" class="btn btn-primary w-100">
          Add new todo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoList",
  props: {
    title: String,
  },
  setup() {
    const todos = ref(["Read a book", "Go for a walk", "Eat food"]);
    const newTodo = ref("");

    function addNewTodo() {
      todos.value.push(newTodo.value);
      newTodo.value = "";
    }

    return {
      todos,
      newTodo,
      addNewTodo,
    };
  },
};
</script>
