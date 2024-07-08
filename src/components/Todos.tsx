import React, { useContext } from "react";
// import Todo from "../models/todo";
import { TodoList } from "./TodoList";
import { TodosContext } from "../store/TodosContext";

const Todos = () => {
  const context = useContext(TodosContext);
  return (
    <ul className="max-w-sm mx-auto mt-10 space-y-2">
      {context?.items?.map((item, index) => (
        <TodoList
          key={index}
          text={item.text}
          onRemoveTodo={() => context.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
