const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("All Tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(200).json({ task });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.json({ updateid: req.params.id });
};
const deleteTask = (req, res) => {
  res.json({ deleteid: req.params.id });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
