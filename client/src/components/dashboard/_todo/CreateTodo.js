import React, { Component } from "react";
import axios from "axios";

export default class CreateTodo extends Component {
  state = {
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    };

    axios
      .post(`http://localhost:4000/todos/add`, newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: true
    });
    console.log(this.state);
  };

  onChangeTodoPriority = e => {
    this.setState({
      todo_priority: e.target.value
    });
  };

  render() {
    const { todo_description, todo_responsible } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create new Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              name="todo_description"
              value={todo_description}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Responsible</label>
            <input
              type="text"
              name="todo_responsible"
              value={todo_responsible}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          {/* Low */}
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                value="Low"
                className="form-check-input"
                id="priorityLow"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            {/* Medium */}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                value="Medium"
                className="form-check-input"
                id="priorityMedium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            {/* High */}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                value="High"
                className="form-check-input"
                id="priorityHigh"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Todo"
            />
          </div>
        </form>
      </div>
    );
  }
}
