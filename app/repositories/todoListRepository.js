const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    for (var i=0;i<this.todoList.length;i++){
        return this.todoList[i];
        console.log('id of todos:' + this.todoList[i].id + 'name of todos:' + this.todoList[i].name);
    }
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    for (var i=0;i<this.todoList.length;i++){
        if (this.todoList[i].id == id){
            return this.todoList[i];
            //console.log('id of todos:' + this.todoList[i].id + '  name of todos:' + this.todoList[i].name + '  desc of todos:' + this.todoList[i].description);
        }
    }
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    var todo = new Todo(++currentId,todoBody.name,todoBody.description);
    this.todoList.push(todo);
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    for (var j=0;j<this.todoList.length;j++){
        if (this.todoList[j].id == id){
            this.todoList[j].name = update.name;
            this.todoList[j].description = update.description;
            return this.todoList[j];
        }
    }
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    for (var m=0;m<this.todoList.length;m++){
        if (this.todoList[m].id == id){
            this.todoList.splice(m,1);
        }
    }
  }
}

module.exports = new TodoListRepository();