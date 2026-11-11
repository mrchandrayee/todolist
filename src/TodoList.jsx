import { useState } from "react";

function TodoList() {
  const [selected, setSelected] = useState([]);

  const todos = [
    "Learn React",
    "Practice JavaScript",
    "Build a project",
    "Apply for internship",
  ];

  const selectTodo = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80">
      <h1 className="text-2xl font-bold mb-4 text-center">
        My Todo List
      </h1>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => selectTodo(index)}
            className={`p-3 rounded-lg cursor-pointer ${
              selected.includes(index)
                ? "bg-green-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;