import { nanoid } from "nanoid";
import { changeTheme } from "./controllers/changeTheme.js";
import printMe from "./print.js";
import "./index.css";

const theme = document.getElementById("changeTheme");
const todosForm = document.querySelector(".todosForm");
const tempBtn = document.querySelector(".tempBtn");
const todosList = document.querySelector(".todosList");

const tasksArray = [
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

function showAllTasks() {
   const sortTasksArray = tasksArray.sort((a, b) => {
      if (a.stamp > b.stamp) {
         return -1;
      }

      if (b.stamp > a.stamp) {
         return 1;
      }

      return 0;
   });

   const _tasks = sortTasksArray.map(function (task) {
      return `<div class="todoItem" id="${task.id}" >
      <input type="checkbox" ${task.complete && "checked"} id="todoTask"  />
      <label for="todoTask" class="taskTitle">${task.title}</label>
      <button id="editTask" class="editTask">Edit</button>
      <button id="deleteTask">Delete</button>
   </div>`;
   });
   todosList.innerHTML = _tasks.join("");
}

showAllTasks();

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
   showAllTasks();
   inputValue.value = "";
   console.log(tasksArray);
   return;
}

todosForm.addEventListener("submit", addTask);

theme.addEventListener("click", changeTheme);
