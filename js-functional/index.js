// import { v4 as uuidv4 } from "uuid";
import { randomName } from "./controllers/temp.js";
import { changeTheme } from "./controllers/changeTheme.js";
// const uuid = require("uuid");

const theme = document.getElementById("changeTheme");
const todosForm = document.querySelector(".todosForm");
const tempBtn = document.querySelector(".tempBtn");

tempBtn.addEventListener("click", randomName);

const tasksArray = [
   {
      complete: true,
      title: "the is random task",
      id: 1,
   },
   {
      complete: false,
      title: "the is dhuishdies task",
      id: 2,
   },
];

function addFunction(e) {
   e.preventDefault();
   const inputValue = document.querySelector(".todosInput").value;

   const _input = {
      inputValue,
      // id: uuidv4,
      complete: false,
   };
   console.log(_input);
}

todosForm.addEventListener("submit", addFunction);

theme.addEventListener("click", changeTheme);
