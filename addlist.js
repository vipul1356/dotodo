function saveTask() {
    const task = document.getElementById("input-box").value;
    if (task === '') {
        alert("Please enter a task.");
    } else {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        alert("Task saved! Navigate to the display page.");
        document.getElementById("input-box").value = ""; 
    }
}