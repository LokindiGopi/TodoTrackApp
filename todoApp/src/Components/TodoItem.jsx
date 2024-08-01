import Item from "./Item";
export default function TodoItem({ tasklist, todos, setTodos }) {
  return (
    <div className="mt-2 pl-3 divide-y divide-dashed hover:divide-solid">
      {tasklist.map((item) => (
        <Item
          key={item.id}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
