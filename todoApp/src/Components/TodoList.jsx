import { useState } from "react";
import TodoHeader from "./TodoHeader";

export default function TodoList({ todos, setTodos }) {
  const [headings, setHeadings] = useState(["todo", "inprogress", "done"]);
  return (
    <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 content-start">
      {headings.map((item, index) => (
        <TodoHeader key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
