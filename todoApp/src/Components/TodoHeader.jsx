import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDrop } from "react-dnd";
import toast, { Toaster } from "react-hot-toast";

export default function TodoHeader({ item, todos, setTodos }) {
  const [tasklist, setTasklist] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todos",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  useEffect(() => {
    setTasklist(todos.filter((task) => task.status === item));
  }, [todos]);
  console.log("tasklist", tasklist);
  const addItemToSection = (id) => {
    console.log(id);
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: item } : todo
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    toast.success("task is moving");
  };

  return (
    <div
      ref={drop}
      className="shadow-md m-4 sm:m-6 md:m-8 bg-slate-50 rounded-2xl"
    >
      <div className="bg-slate-200 text-center p-3 font-bold rounded-lg">
        {item}
      </div>
      <div className="p-4">
        <TodoItem tasklist={tasklist} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
