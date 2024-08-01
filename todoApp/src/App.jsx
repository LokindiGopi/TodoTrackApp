import Header from "./Components/Header";
import Todo from "./Components/Todo";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen m-0 font-serif">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Toaster />
        <Todo />
      </DndProvider>
    </div>
  );
}

export default App;
