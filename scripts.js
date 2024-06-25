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


        taskInput.value = "";
    }
}
