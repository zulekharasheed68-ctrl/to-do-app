var input = document.querySelector("#taskInput");
var addButton = document.querySelector(".but1");
var deleteButton = document.querySelector(".but2");
var list = document.querySelector("ul");

function addTask() {

    var task = input.value.trim();

    if (task === "") {

        Swal.fire({
            icon: "warning",
            title: "Empty Task",
            text: "Please enter a task!"
        });

        return;
    }

    var li = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.innerHTML = task;

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    var deleteTaskButton = document.createElement("button");
    deleteTaskButton.innerHTML = "Delete";

    editButton.onclick = function () {

        Swal.fire({
            title: "Edit Task",
            input: "text",
            inputValue: taskText.innerHTML,
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel"
        }).then(function (result) {

            if (result.isConfirmed && result.value.trim() !== "") {

                taskText.innerHTML = result.value.trim();

                Swal.fire({
                    icon: "success",
                    title: "Task Edited!",
                    text: "Your task has been edited successfully.",
                    timer: 1500,
                    showConfirmButton: false
                });

            }

        });

    };

    deleteTaskButton.onclick = function () {

        Swal.fire({
            title: "Delete Task?",
            text: "This task will be deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "Cancel"
        }).then(function (result) {

            if (result.isConfirmed) {

                li.remove();

                Swal.fire({
                    icon: "success",
                    title: "Task Deleted!",
                    text: "Your task has been deleted.",
                    timer: 1500,
                    showConfirmButton: false
                });

            }

        });

    };

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteTaskButton);

    list.appendChild(li);

    input.value = "";

    Swal.fire({
        icon: "success",
        title: "Task Added!",
        text: "Your task has been added successfully.",
        timer: 1500,
        showConfirmButton: false
    });
}


addButton.onclick = function () {
    addTask();
};


input.onkeydown = function (event) {

    if (event.key === "Enter") {
        addTask();
    }

};


deleteButton.onclick = function () {

    if (list.children.length === 0) {

        Swal.fire({
            icon: "warning",
            title: "No Tasks",
            text: "There are no tasks to delete!"
        });

        return;
    }

    Swal.fire({
        title: "Delete All Tasks?",
        text: "All your tasks will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete All",
        cancelButtonText: "Cancel"
    }).then(function (result) {

        if (result.isConfirmed) {

            list.innerHTML = "";

            Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "All tasks have been deleted.",
                timer: 1500,
                showConfirmButton: false
            });

        }

    });

};