import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.i`
  color: #2abfb4;
  transition: ease-in-out 300ms;
  font-size: 25px;
  &:hover {
    color: red;
  }
`;

const Todo = props => {
  return (
    <tr>
      <td>{props.todo.todo_description}</td>
      <td>{props.todo.todo_responsible}</td>
      <td>{props.todo.todo_priority}</td>
      <td>
        <Link to={`/dashboard/edit/${props.todo._id}`}>Edit</Link>
      </td>
      <td>
        <Icon className="fas fa-trash-alt" onClick={props.deleteListHandler}>
          x
        </Icon>
      </td>
    </tr>
  );
};

export default Todo;
