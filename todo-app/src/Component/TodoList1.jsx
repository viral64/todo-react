import { useState } from "react";

function TodoList1() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleDelete = (indexToDelete) => {
    setData(data.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (index) => {
    setShowModal(true);
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
      <div className="m-5 flex justify-center w-full">
        <div className="w-60">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="data flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    className="border-violet-500 size-4 mt-2.5"
                  />{" "}
                  <span className="text-xl">{item}</span>
                </div>
                <div>
                  <button
                    className="m-1 text-xl"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="m-1 text-xl"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl">No todos yet</p>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg w-80">
            <h2 className="text-2xl mb-4">Edit Todo</h2>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border-2 border-violet-500 rounded w-full p-1.5 mb-2 focus:border-violet-600"
            />
            <div className="flex justify-end">
              <button
                className="bg-violet-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList1;
