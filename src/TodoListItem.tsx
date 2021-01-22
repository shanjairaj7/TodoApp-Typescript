import React from "react";
import { TodoItem } from "./TodoItem";

// Props for this component
interface TodoListItemProps {
  todos: Array<Todo>;
  toggleTodo: toggleTodo;
  showUpdateTodo: showUpdateTodo;
  deleteTodo: deleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todos,
  toggleTodo,
  showUpdateTodo,
  deleteTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            showUpdateTodo={showUpdateTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};
