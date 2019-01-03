import React, { Component } from "react";
import axios from "axios";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  // helper method
  todoList = () => {
    return this.state.todos.map((currentTodo, index) => (
      <Todo
        todo={currentTodo}
        key={index}
        deleteListHandler={() => this.deleteListHandler(currentTodo._id)}
      />
    ));
  };

  // Remove Items
  deleteListHandler = currentTodo => {
    const url = `http://localhost:4000/todos/delete/${currentTodo}`;
    axios
      .delete(url)
      .then(res => {
        this.setState((state, props) => {
          return {
            todos: state.todos.filter(t => t._id !== currentTodo)
          };
        });
      })
      .catch(err => console.log(err));
  };

  // Get Items
  componentDidMount = () => {
    axios
      .get(`http://localhost:4000/todos`)
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { todos } = this.state;
    console.log(todos.length);
    return (
      <React.Fragment>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.length !== 0 ? (
              this.todoList()
            ) : (
              <tr>
                <td>Todo All done !</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
