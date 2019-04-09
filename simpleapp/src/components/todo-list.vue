<template>
  <ul>
    <li v-for="(todo, idx) in todos" :key="idx">
      {{todo}}
      <button @click="editTodo(idx)">Edit</button>
      <button @click="deleteTodo(idx)">X</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["todos", "editTodo", "deleteTodo"]
};
</script>
