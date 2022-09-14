import "./App.scss";
import "./scss/custom.scss";
import Dashboard from "./Dashboard";
import { DragDropContext } from "react-beautiful-dnd";
import tasks from "./data/tasks";
import { useState } from "react";

function App() {
  const [taskItems, setTaskItems] = useState(tasks);

  const [btnDisabled, setBtnDisabled] = useState(true);

  const onDragEnd = (results) => {
    if (!results.destination) {
      return;
    }

    if (results.source.index !== results.destination.index) {
      let tasks = taskItems;
      var element = taskItems[results.source.index];
      tasks.splice(results.source.index, 1);
      tasks.splice(results.destination.index, 0, element);
      setTaskItems(tasks);
      setBtnDisabled(false);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Dashboard
          taskItems={taskItems}
          btnDisabled={btnDisabled}
          setBtnDisabled={setBtnDisabled}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
