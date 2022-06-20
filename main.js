const app = Vue.createApp({
  data() {
    return {
      newTodoText: "",
      todos: [],
      completeTodos: [],
      nextTodoId: 1,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
    doCheck(index, type) {
      if (type === "need") {
        const completeTodo = this.todos.splice(index, 1);
        this.completeTodos.push(...completeTodo);
      } else {
        const noCompleteTodo = this.completeTodos.splice(index, 1);
        this.todos.push(...noCompleteTodo);
      }
    },
    removeTodo(index, type) {
      const toDoList = type === "need" ? this.todos : this.completeTodos;
      toDoList.splice(index, 1);
    },
  },
}).mount("#app");
