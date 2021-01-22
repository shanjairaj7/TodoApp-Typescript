import React, { useEffect, useState } from "react";
import { Input, Space } from "antd";
import { Typography } from "antd";

const { Search } = Input;
const { Title } = Typography;

// Props for this component
interface UpdateTodoProps {
  todoToUpdate: Todo;
  udpateTodo: updateTodo;
}

export const UpdateTodo: React.FC<UpdateTodoProps> = ({
  todoToUpdate,
  udpateTodo,
}) => {
  const [newTodo, setNewTodo] = useState(todoToUpdate);

  useEffect(() => {
    if (todoToUpdate.text !== "") {
      setNewTodo(todoToUpdate);
    }
    console.log(newTodo.text);
  }, [todoToUpdate]);

  return (
    <Space direction="horizontal">
      <Title level={3}>Update your todo</Title>
      <Search
        size="middle"
        enterButton="Update todo"
        placeholder="New todo text"
        value={newTodo.text}
        onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        onSearch={() => udpateTodo(newTodo)}
      />
    </Space>
  );
};
