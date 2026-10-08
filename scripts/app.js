/** Adds a new task from the input field. Warns if the input is empty. */
if (addTaskBtn && taskInput) {
    // bind events here
}
if (taskText.length > 200) {
    alert("Task cannot exceed 200 characters."); // or your custom warning
    return;
}
const parsed = parseInt(saved, 10);
const nextId = isNaN(parsed) ? 1 : parsed;
if (notification && notification.parentNode) {
    notification.parentNode.removeChild(notification);
}