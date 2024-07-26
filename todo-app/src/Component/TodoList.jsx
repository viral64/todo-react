import { useState } from "react";
function TodoList() {
  const [state, setState] = useState("");
  const [todos, setTodos] = useState([]);
  function handleKeyPress(e) {
    const data = {};

    if (e.Key == "Enter") {
      if (todos.length == 0) {
        data.id = 1;
        data.item = state;
        data.completed = false;
      }
      setTodos(data);
      console.log(state);
    }
  }
  return (
    <>
      <div className="decoration-solid text-4xl text-center mt-10">
        Todo List
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          value={state}
          placeholder="Add your work"
          className="border-2 border-violet-500 rounded w-64 p-1.5 focus:border-violet-600"
          onChange={(e) => setState(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        Check Updated State
      </button>
    </>
  );
}

export default TodoList;
