import { useDrag } from "react-dnd";
export default function Item({ item, todos, setTodos }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todos",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);
  function handleDelete(item) {
    console.log("deleted", item);
    setTodos((prev) => {
      const list = todos.filter(
        (todo) => item.id !== todo.id && item.status === "todo"
      );
      console.log(list);
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
  }

  return (
    <div
      ref={drag}
      className={`cursor-grab ${
        isDragging ? "opacity-25" : "opacity-100"
      } transition-opacity duration-300`}
    >
      <div
        key={item.id}
        className="p-3 m-3 font-semibold bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <span
          className={item.status === "done" ? "line-through text-gray-500" : ""}
        >
          {item.name}
        </span>
        {item.status === "todo" && (
          <span className="float-right ml-2">
            <button onClick={() => handleDelete(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
