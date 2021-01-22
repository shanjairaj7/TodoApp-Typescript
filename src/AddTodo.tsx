import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Input, Space } from "antd";
import Title from "antd/lib/typography/Title";
const { Search } = Input;

// Props for this component
interface AddTodoProps {
  addTodo: addTodo;
}

export const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  // Function to call the addTodo function in App.tsx
  const buttonSubmit = () => {
    addTodo({
      id: uuid(),
      text: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <div>
      <Space direction="vertical">
        <Search
          size="large"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          enterButton="Add Todo"
          placeholder="Add a new ToDo"
          onSearch={(e) => buttonSubmit()}
        />
      </Space>
    </div>
  );
};
