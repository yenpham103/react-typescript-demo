import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/TodosContext";
export const TodoAdd = () => {
  const context = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    context.addTodo(enteredText);
    //Reset input
    todoTextInputRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="text"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Todo Text
        </label>
        <input
          type="text"
          id="text"
          placeholder="Add Todo"
          ref={todoTextInputRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Todo
      </button>
    </form>
  );
};
