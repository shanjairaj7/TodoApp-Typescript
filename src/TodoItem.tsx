import React from "react";
import "./App.css";

import { List, message, Avatar, Spin, Checkbox } from "antd";
import { Button, Input, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { UpdateTodo } from "./UpdateTodo";

// Props for this component
interface TodoItemProps {
  todo: Todo;
  toggleTodo: toggleTodo;
  showUpdateTodo: showUpdateTodo;
  deleteTodo: deleteTodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  showUpdateTodo,
  deleteTodo,
}) => {
  return (
    <List.Item>
      <div>
        <Space>
          <Checkbox onChange={() => toggleTodo(todo)} checked={todo.completed}>
            <Text delete={todo.completed}>{todo.text}</Text>
          </Checkbox>
        </Space>
      </div>
      <Space>
        <Button type="dashed" onClick={() => showUpdateTodo(todo)}>
          Edit
        </Button>
        <Button onClick={() => deleteTodo(todo)} danger type="dashed">
          Delete
        </Button>
      </Space>
    </List.Item>
  );
};
