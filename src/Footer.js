export function Footer({ tasks }) {
    if (!tasks.length) return <p className="footer"><em>Start adding some tasks</em></p>;
    const numTasks = tasks.length;
    const numCompleted = tasks.filter((task) => task.completed).length;
    const percentage = Math.round(numCompleted / numTasks * 100);

    return (
        <footer className="footer">
            <em>{percentage === 100 ? "You've completed all your tasks🎉" : `You have ${numTasks} tasks today! You have completed ${numCompleted} (${percentage}%)`}</em>
        </footer>
    );
}
