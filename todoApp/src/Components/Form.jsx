import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    done: false,
    status: "todo",
  });

  function handleSubmit(e) {
    e.preventDefault();
    //setTodos([...todos, todo]);
    if (todo.name.length < 3) {
      return toast.error("task Name must have 3 characters");
    }
    if (todo.name.length > 100) {
      return toast.error("task Name must not more than 100 characters");
    }
    setTodos((prev) => {
      const list = [...prev, todo];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("task Created");
    setTodo({
      id: "",
      name: "",
      done: false,
      status: "todo",
    }); //for clearing the feild
  }
  return (
    <form
      className="bg-white rounded-lg p-2.5 w-[500px] mx-auto mt-12 drop-shadow-[10px_10px_5px_rgb(156,162,164)] bg-no-repeat bg-[url('asserts/Search.gif')]"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <input
          className="block border-none w-full text-black text-base pl-[10%] bg-transparent focus:outline-none"
          placeholder="Enter todo item.."
          onChange={(e) => {
            setTodo({
              id: uuidv4(),
              name: e.target.value,
              done: false,
              status: "todo",
            });
          }}
          type="text"
          value={todo.name}
        ></input>
        <button
          className="inline-block border-none rounded bg-blue-500 px-5 py-3 text-aliceblue cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </div>
      {/* {console.log(todo)} */}
    </form>
  );
}
