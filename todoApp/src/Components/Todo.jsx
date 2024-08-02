import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  const completedtodos = todos.filter((todo) => todo.done === true).length;
  const inprogresstodos = todos.filter(
    (todo) => todo.status === "inprogress"
  ).length;
  const totaltodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedtodos={completedtodos}
        totaltodos={totaltodos}
        inprogresstodos={inprogresstodos}
      />
    </div>
  );
}
