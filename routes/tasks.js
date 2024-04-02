const express = require("express");
const routeer = express.Router();
const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controller/tasks");

routeer.route("/").get(getAllTasks).post(createTask);
routeer.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = routeer;
