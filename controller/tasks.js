const Task = require("../models/tasks");
const wrapper = require('../middlewear/async-wrapper')

const getAllTasks =wrapper( async (req, res) => {
    const task = await Task.find({});
    res.status(200).json({ task});
})

const getTask =wrapper( async (req, res) => { 
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
})

const createTask =wrapper( async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

const updateTask =wrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send("Invalid ID");
    }
    res.status(200).json({ task });
  
})

const deleteTask =wrapper( async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ Sucess: false, message: "Task not found" });
    }
    res.status(200).send("Deleted task");
})

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
