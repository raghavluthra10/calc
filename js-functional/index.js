import { nanoid } from "nanoid";
import { changeTheme } from "./controllers/changeTheme.js";
import printMe from "./print.js";
import "./index.css";

window.addEventListener("load", () => {
   const theme = document.getElementById("changeTheme");
   const todosForm = document.querySelector(".todosForm");
   const todosList = document.querySelector(".todosList");
   // const deleteBtn = document.getElementsByClassName("deleteTask");

   const temp = document.querySelector(".tempBtn");

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
      console.log(todosList);

      // delete task action
      const deleteBtn = document.querySelectorAll(".deleteTask");

      for (let i = 0; i < deleteBtn.length; i++) {
         deleteBtn[i].addEventListener("click", function (e) {
            const parentElement = deleteBtn[i].parentElement;

            const taskId = parentElement.id;
            console.log(taskId);

            const updateTaskAfterDelete = tasksArray.filter((ta) => {
               return ta.id != taskId;
            });

            this.tasksArray = [...updateTaskAfterDelete];

            parentElement.remove();
         });
      }
   }

   showAllTasks(tasksArray);

   function addTask(e) {
      e.preventDefault();
      let inputValue = document.querySelector(".todosInput");

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
   }

   todosForm.addEventListener("submit", addTask);
});
