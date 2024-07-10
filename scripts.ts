function addTask() {
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const taskText = taskInput.value;
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = taskText;
        listItem.onclick = function() {
            (this as HTMLLIElement).style.textDecoration = "line-through";
            setTimeout(() => {
                (this as HTMLLIElement).remove();
            }, 1000);
        };
        const taskList = document.getElementById("taskList") as HTMLUListElement;
        taskList.appendChild(listItem);

        let tasks: string[] = [];
        const tasksFromStorage = localStorage.getItem("tasks");
        if (tasksFromStorage !== null) {
            tasks = JSON.parse(tasksFromStorage);
        }
        
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        window.onload = function() {
            const tasksFromStorage = localStorage.getItem("tasks");
            if (tasksFromStorage !== null) {
                tasks = JSON.parse(tasksFromStorage);
            }
        
            const taskList = document.getElementById("taskList") as HTMLUListElement;
            tasks.forEach(function(taskText) {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item";
                listItem.textContent = taskText;
                listItem.onclick = function() {
                    (this as HTMLLIElement).style.textDecoration = "line-through";
                    setTimeout(() => {
                        (this as HTMLLIElement).remove();
                    }, 1000);
                };
                taskList.appendChild(listItem);
            });
        };
              
     };
 };


