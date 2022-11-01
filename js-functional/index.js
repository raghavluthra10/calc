import { nanoid } from "nanoid";
import { changeTheme } from "./controllers/changeTheme.js";
import printMe from "./print.js";
import "./index.css";

const inputModeEnum = {
   0: "normal_mode",
   1: "edit_mode",
};

let currentInputMode = inputModeEnum[0];

window.addEventListener("load", () => {
   const theme = document.getElementById("changeTheme");
   const todosForm = document.querySelector(".todosForm");
   const todosList = document.querySelector(".todosList");
   const inputValue = document.querySelector(".todosInput");
   const formButtonValue = todosForm.children[1];

   let editModeId = "";

   theme.addEventListener("click", changeTheme);

   let tasksArray = [
      {
         complete: true,
         title: "the is random task",
         stamp: new Date(),
         id: 1,
      },
      {
         complete: false,
         title: "the is dhuishdies task",
         stamp: new Date(),
         id: 2,
      },
   ];

   function showAllTasks(tasksArray) {
      const sortTasksArray = tasksArray.sort((a, b) => {
         if (b.stamp < a.stamp) {
            return -1;
         }
         return;
      });

      const _task = sortTasksArray.map(function (task) {
         return `<div class="todoItem" id="${task.id}" >
                <input type="checkbox" ${
                   task.complete && "checked"
                } id="todoTask"  />
                <label for="todoTask" class="taskTitle">${task.title}</label>
                <button id="editTask" class="editTask">Edit</button>
                <button id="deleteTask" class="deleteTask">Delete</button>
             </div>`;
      });

      todosList.innerHTML = _task.join("");

      // delete task action
      const deleteBtn = document.querySelectorAll(".deleteTask");

      for (let i = 0; i < deleteBtn.length; i++) {
         deleteBtn[i].addEventListener("click", function (e) {
            const parentElement = deleteBtn[i].parentElement;

            const taskId = parentElement.id;

            const updateTaskAfterDelete = tasksArray.filter((ta) => {
               return ta.id != taskId;
            });

            this.tasksArray = [...updateTaskAfterDelete];

            parentElement.remove();
         });
      }

      // edit task action
      const editBtn = document.querySelectorAll(".editTask");

      for (let i = 0; i < editBtn.length; i++) {
         editBtn[i].addEventListener("click", function (e) {
            formButtonValue.innerHTML = "Done";
            const parentElement = editBtn[i].parentElement;
            const taskId = parentElement.id;
            const taskTitle =
               parentElement.querySelector(".taskTitle").innerHTML;

            inputValue.value = taskTitle;

            currentInputMode = inputModeEnum[1];

            editModeId = taskId;
            // now since editmode is on, addTask functions "IF" statement will take care of it
         });
      }
   }

   showAllTasks(tasksArray);

   function addTask(e) {
      e.preventDefault();

      if (currentInputMode == inputModeEnum[0]) {
         const _input = {
            title: inputValue.value,
            id: nanoid(),
            stamp: new Date(),
            complete: false,
         };

         tasksArray.push(_input);
         showAllTasks(tasksArray);
         inputValue.value = "";
         return;
      } else if (currentInputMode == inputModeEnum[1]) {
         const currentTodoValue = inputValue.value;

         let updatedTask = {};

         for (let i = 0; i < tasksArray.length; i++) {
            if (tasksArray[i].id == editModeId) {
               updatedTask = tasksArray[i];
               updatedTask.title = currentTodoValue;
            }
         }

         const updatedArray = tasksArray.filter((t) => {
            return t.id != editModeId;
         });

         updatedArray.push(updatedTask);

         tasksArray = [...updatedArray];

         showAllTasks(tasksArray);
         currentInputMode = inputModeEnum[0];
         formButtonValue.innerHTML = "Add";
         inputValue.value = "";
         return;
      }
   }

   todosForm.addEventListener("submit", addTask);
});
