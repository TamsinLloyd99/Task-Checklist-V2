import { useState } from "react";
import { Button } from "./App";

export function TaskForm({ onAddTasks }) {
    //accepted OnAddTasks as a prop from the App component after lifting state
    const [description, setDescription] = useState('');

    //1.set up empty description state
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const NewTask = { id: Date.now(), description, completed: false };
        console.log(NewTask);

        onAddTasks(NewTask);
        //used the onAddTasks function from the App component
        setDescription('');
        //saves the value of description as a new task
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>What tasks do you need to complete today?</h3>
            <input type="text"
                placeholder="Add a task"
                value={description}
                //2.force the element to take the value of the description state
                onChange={(e) => setDescription(e.target.value)} />
            <Button>Add Task</Button>
        </form>
    );
}
