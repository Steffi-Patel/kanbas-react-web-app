import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import Classes from "./Classes";
import PathParameters from "./PathParameters";
import JavaScript from "./JavaScript";

function Assignment3() {
 
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    
    </div>
  );
}

export default Assignment3;
