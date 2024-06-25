function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;
    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = taskText;
        listItem.onclick = function() {
            this.style.textDecoration = "line-through";
            setTimeout(() => {
                this.remove();
            }, 1000);
        };
        let taskList = document.getElementById("taskList");
        taskList.appendChild(listItem);

        let tasks= JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";


        window.onload = function() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("taskList");
            tasks.forEach(function(taskText) {
                let listItem = document.createElement("li");
                listItem.className = "list-group-item";
                listItem.textContent = taskText;
                listItem.onclick = function() {
                    this.style.textDecoration = "line-through";
                    setTimeout(() => {
                        this.remove();
                    }, 1000);
                };
                taskList.appendChild(listItem);
            });
        };


        taskInput.value = "";
    }
}
