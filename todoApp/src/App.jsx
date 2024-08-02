import Header from "./Components/Header";
import Todo from "./Components/Todo";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="bg-slate-300 min-h-screen m-0 font-serif flex flex-col">
      <DndProvider backend={HTML5Backend}>
        <Header className="p-4 bg-slate-200" />
        <Toaster />
        <div className="flex flex-col min-h-screen">
        <Todo className=" flex-1 overflow-y-auto p-4 bg-slate-200"/>
        </div>

      </DndProvider>
    </div>
  );
}

export default App;
