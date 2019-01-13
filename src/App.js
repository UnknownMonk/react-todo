import React, { Component } from 'react';
import Todos from './Todos';

import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
