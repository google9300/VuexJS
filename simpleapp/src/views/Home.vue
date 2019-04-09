<template>
  <div class="home">
    Count:{{$store.state.count}}
    <br>
    <button @click="$store.commit('increment')">Increment</button>
    <button @click="$store.commit('decrement')">Decrement</button>
    <todoInput
      :title="title"
      :addTodo="addTodo"
      :editIdx="editIdx"
      :updateTodo="updateTodo"
      :updateTitle="updateTitle"
    />
    <todoList :todos="todos" :editTodo="editTodo" :deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import todoInput from "@/components/todo-input";
import todoList from "@/components/todo-list";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  computed: mapState(["todos", "title", "editIdx"]),
  methods: mapMutations([
    "addTodo",
    "editTodo",
    "updateTodo",
    "deleteTodo",
    "updateTitle"
  ]),
  components: {
    todoInput,
    todoList
  }
};
</script>
<style>
button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>
