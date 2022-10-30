import { nanoid } from "nanoid";
import { changeTheme } from "./controllers/changeTheme.js";
import printMe from "./print.js";
import "./index.css";

const theme = document.getElementById("changeTheme");
const todosForm = document.querySelector(".todosForm");
const tempBtn = document.querySelector(".tempBtn");

tempBtn.addEventListener("click", printMe);

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
      id: nanoid(),

      complete: false,
   };
   console.log(_input);
}

todosForm.addEventListener("submit", addFunction);

theme.addEventListener("click", changeTheme);
