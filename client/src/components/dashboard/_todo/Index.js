import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import CreateTodo from "./CreateTodo";
// import "bootstrap/dist/css/bootstrap.min.css";
const Todos = styled.div`
  /* @import url("bootstrap/dist/css/bootstrap.min.css"); */
  
`;

export class TodoContainer extends Component {
  render() {
    return (
      <Router>
        <Todos className="container">
          <nav>
            <div className="nav-wrapper">
              <Link to="/dashboard">
                <img
                  src="https://react.semantic-ui.com/logo.png"
                  style={{
                    width: 60
                  }}
                  alt="logo"
                />
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/dashboard" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/dashboard" exact component={TodoList} />
          <Route path="/dashboard/edit/:id" component={EditTodo} />
          <Route path="/dashboard/create" component={CreateTodo} />
        </Todos>
      </Router>
    );
  }
}

export default TodoContainer;
