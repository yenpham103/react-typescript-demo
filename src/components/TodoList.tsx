import React from "react";

export const TodoList: React.FC<{
  text: string;
  onRemoveTodo: (id: string) => void;
}> = ({ text, onRemoveTodo }) => {
  return (
    <li className="bg-white border border-gray-300 rounded-lg py-2 px-4 mb-2 shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-center">
      <span className="text-gray-700 font-medium">{text}</span>
      <div className="space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300">
          Sửa
        </button>
        <button
          onClick={() => onRemoveTodo(text)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Xóa
        </button>
      </div>
    </li>
  );
};
