import { useState } from "react";
import { Button } from "./App";

export function Checklist({ tasks, onDeleteTasks, onToggleTask, onClearList }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedTasks;
    //create new variable to keep original tasks untouched
    if (sortBy === "input") sortedTasks = tasks;
    if (sortBy === "description") sortedTasks = tasks.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "completed") sortedTasks = tasks.slice().sort((a, b) => Number(a.completed) - Number(b.completed));

    console.log(sortBy);


    return (
        <div className="checklist">
            <ul>
                {sortedTasks.map((task) => (
                    <Task task={task}
                        onDeleteTasks={onDeleteTasks}
                        onToggleTask={onToggleTask}
                        key={task.id} />
                ))}
                {/* map through items array from state */}
            </ul>

            <div className="sort">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by the input order</option>
                    <option value="description">Sort by the description</option>
                    <option value="completed">Sort by the completed status</option>
                </select>
                <Button onClick={() => { onClearList(); }}>Clear List</Button>
            </div>
        </div>
    );
}
function Task({ task, onDeleteTasks, onToggleTask }) {
    return <li className="listItems">
        <input type="checkbox"
            value={task.completed}
            onChange={() => { onToggleTask(task.id); }} //create a controlled element
        />
        <span style={task.completed ? { textDecoration: "line-through" } : {}}
        >{task.description}</span>
        <Button onClick={() => onDeleteTasks(task.id)}>❌</Button>
    </li>;
    // generated lis for every task with a description and close button
}
