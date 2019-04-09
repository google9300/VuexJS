import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: ["a", "b"],
    title: "",
    editIdx: -1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    updateTitle(state, title) {
      if (title && title !== "") {
        state.title = title;
      }
    },
    addTodo(state, title) {
      if (title && title !== "") {
        state.todos.push(title);
        state.title = "";
      }
    },
    editTodo(state, idx) {
      state.title = state.todos[idx];
      state.editIdx = idx;
    },
    deleteTodo(state, idx) {
      state.todos.splice(idx, 1);
    },
    updateTodo(state, title) {
      state.todos[state.editIdx] = title;
      state.editIdx = -1;
      state.title = "";
    }
  }
});
