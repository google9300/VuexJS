<template>
  <div>
    <h2>Input Component</h2>
    <input type="text" :value="title" @input="updateTitle($event.target.value)">
    <button @click="addTodo(title)" v-if="editIdx < 0">Add Todo</button>
    <button @click="updateTodo(title)" v-if="editIdx >= 0">Update Todo</button>
  </div>
</template>
<script>
export default {
  props: ["title", "editIdx", "updateTitle", "addTodo", "updateTodo"]
};
</script>
