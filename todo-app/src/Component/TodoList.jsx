function TodoList({ todos }) {
  return (
    <>
      <div className="data w-60 flex justify-between">
        <div>
          <input type="checkbox" className="border-violet-500 size-4 mt-2.5" />{" "}
          <span className="text-xl">Note1</span>
        </div>
        <div>
          <button className="m-1 text-xl">Edit</button>
          <button className="m-1 text-xl">Delete</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
