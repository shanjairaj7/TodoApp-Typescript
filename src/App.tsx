import React, { useState } from "react";
import "./App.css";

// Import components from Ant Design
import { Alert, List } from "antd";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";
import { TodoListItem } from "./TodoListItem";
import { v4 as uuid } from "uuid";
import { UpdateTodo } from "./UpdateTodo";

const { Search } = Input;

// Initial todos
const initialTodos = [
  {
    id: uuid(),
    text: "Todo 1",
    completed: false,
  },
  {
    id: uuid(),
    text: "Todo 2",
    completed: true,
  },
];

export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const [updateTodo, setUpdateTodo] = useState({
    id: "",
    text: "",
    completed: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Add Todo
  const addTodo: addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        text: todo.text,
        completed: todo.completed,
      },
    ]);
    console.log(todo);
  };

  // Change state of completed todo
  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Show update todo
  const showUpdateTodo: showUpdateTodo = (todoToUpdate) => {
    setUpdateTodo(todoToUpdate);
    console.log(todoToUpdate);
  };

  // Update the todo
  const udpateTodo: updateTodo = (todoToUpdate) => {
    console.log("UPDATE TODO: ", updateTodo);
    todos.map((todo) => {
      console.log(todo);

      if (todo.id == todoToUpdate.id) {
        {
          setUpdateTodo({ ...updateTodo, text: "" });
        }
        setTodos(
          todos.map((todo) =>
            todoToUpdate.id == todo.id
              ? { ...todo, text: todoToUpdate.text }
              : todo
          )
        );
        setShowSuccess(!showSuccess);
        setInterval(() => {
          setShowSuccess(false);
        }, 2000);
      }
    });
  };

  // Delete the todo
  const deleteTodo: deleteTodo = (deleteTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deleteTodo.id));
    setShowDelete(!showDelete);
    setInterval(() => {
      setShowDelete(false);
    }, 2000);
  };

  return (
    <div className="container">
      <Space direction="vertical" style={{ width: 800 }}>
        <Title>Todo App</Title>
        <AddTodo addTodo={addTodo} />
      </Space>

      {/* Displaying alert once any action takes place */}
      {showSuccess ? (
        <div>
          {console.log(updateTodo.text)}
          <br />
          <Alert
            type="success"
            message={`Successfully updated ${updateTodo.text}`}
            showIcon
          />
        </div>
      ) : (
        ""
      )}

      {/* Displaying the Alert once the todo is deleted */}
      {showDelete ? (
        <div>
          <br />
          <Alert
            type="warning"
            message={`Successfully deleted Todo`}
            showIcon
          />
        </div>
      ) : (
        ""
      )}

      <br />
      <br />

      {/* Displaying the Update todo only 
      if there is any todo to udpate*/}
      {updateTodo.text !== "" ? (
        <UpdateTodo todoToUpdate={updateTodo} udpateTodo={udpateTodo} />
      ) : (
        ""
      )}

      <TodoListItem
        todos={todos}
        toggleTodo={toggleTodo}
        showUpdateTodo={showUpdateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
