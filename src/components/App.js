import { useState } from "react"
import { Logo } from "./Logo";
import { TaskForm } from "./TaskForm";
import { Checklist } from "./Checklist";
import { Footer } from "./Footer";

// const Initialtasks = [
//   { id: 1, description: "Do Laundry", completed: false },
//   { id: 2, description: "Study", completed: false },
//   { id: 3, description: "Exercise", completed: true }
// ];

export function Button({ children, onClick }) {
  return <button className="btn" onClick={onClick}>{children}</button>

}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  //set up empty task array

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task])
    //takes in a task parameter (NewTask) and updates the state variable so that a new task array is created using the current tasks from the state and the new task
  }

  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter(task => task.id !== id))
    //takes in an id parameter and updates the state variable so that a new task array us created where the task with the matching id is removed
  }

  function handleToggleTask(id) {
    setTasks(tasks => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    //takes in an id parameter and updates the state variable so that a new task array is created where the task with the matching id is updated to have the opposite value of completed
  }

  function onClearList() {
    if (!tasks.length) {
      alert("No tasks to delete");
      return;
    }

    const confirmed = window.confirm("Are you sure you want to delete all tasks?")
    if (confirmed) {
      setTasks([]);
      setIsStarted(false);
    }
  }


  function handleStart(e) {
    e.preventDefault()

    setIsStarted(true);

  }

  return (
    <div className="page">
      <div className="app">
        <Logo />
        {!isStarted ? (
          <Button onClick={handleStart}>Start</Button>
        ) : (
          <>
            <TaskForm onAddTasks={handleAddTasks} />
            <Checklist
              tasks={tasks}
              onDeleteTasks={handleDeleteTasks}
              onToggleTask={handleToggleTask}
              onClearList={onClearList}
            />
          </>
        )}
      </div>
      {isStarted && <Footer tasks={tasks} />}
    </div>
  );
}
