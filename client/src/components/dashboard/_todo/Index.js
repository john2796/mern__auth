import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import CreateTodo from "./CreateTodo";
import "bootstrap/dist/css/bootstrap.min.css";
const Todos = styled.div`
  /* @import url("bootstrap/dist/css/bootstrap.min.css"); */
`;

export class TodoContainer extends Component {
  render() {
    return (
      <Todos className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="..">
            <img
              src="https://react.semantic-ui.com/logo.png"
              style={{
                width: 60
              }}
              alt="logo"
            />
          </a>
          <Link to="/dashboard" className="navbar-brand">
            Mern-Stack Todo App
          </Link>
          <div className="navbar-collapse nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/dashboard" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/dashboard/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <TodoList />
        <EditTodo />
    */}
        <Route path="/dashboard" exact component={TodoList} />
        <Route path="/dashboard/edit/:id" component={EditTodo} />
        <Route path="/dashboard/create" component={CreateTodo} />
      </Todos>
    );
  }
}

export default TodoContainer;
