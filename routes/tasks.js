const express = require("express");
const router = express.Router(); //invoke

const {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
  editTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
// '/'-route path match with everything qka e kemi si psh ne app.js si psh "/api/v1/tasks"

module.exports = router;
