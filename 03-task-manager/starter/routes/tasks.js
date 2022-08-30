/** @format */

/**
 * From the App.js the second File is the route file the holds all 
 * our route / HTTP methods
 * 
 * It also pulls methods from the controller folder that consists
 * the functions to be pasted into the HTTP methods
 */

const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
