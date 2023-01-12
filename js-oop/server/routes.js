const Router = require("express").Router;
const { getTasks } = require("./controllers");

const routes = Router();

// make task
routes.get("/getTasks", getTasks);

// get tasks

// delete tasks

// edit task

module.exports = routes;
