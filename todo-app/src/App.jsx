import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  const handleAddTodo = () => {
    if (state.trim() !== "") {
      setData([...data, state]);
      setState("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

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
      <div className="m-5  w-full">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="data w-60 flex justify-between">
              <div>
                <input
                  type="checkbox"
                  className="border-violet-500 size-4 mt-2.5"
                />{" "}
                <span className="text-xl">{item}</span>
              </div>
              <div>
                <button className="m-1 text-xl">Edit</button>
                <button className="m-1 text-xl">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl">No todos yet</p>
        )}
      </div>
    </>
  );
}

export default App;
