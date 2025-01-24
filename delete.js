
const taskList = document.getElementById("task-list");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function displayTasks() {
    taskList.innerHTML = ""; 
    if (tasks.length === 0) {
        taskList.innerHTML = "<li>No tasks added yet.</li>";
    } else {
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "";
            removeBtn.className = "btn";
            removeBtn.onclick = () => removeTask(index);
            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }
}
function removeTask(index) {
    tasks.splice(index, 1); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    displayTasks(); 
}
displayTasks();
