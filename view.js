const taskList = document.getElementById("task-list");
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if (tasks.length === 0) {
            taskList.innerHTML = "<li>No tasks added yet.</li>";
        } else {
            tasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task;
                taskList.appendChild(li);
            });
        }