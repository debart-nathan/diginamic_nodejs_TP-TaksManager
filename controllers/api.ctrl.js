const { resolve } = require("path");
const db = require("../db/db.json")
const { writeFileSync } = require("fs")

exports.getUsersCtrl = (req, res) => {
    res.send(db.users);
}

exports.getUserTasksCtrl = (req, res) => {
    const tasks = db.tasks.filter((task) => {
        return task.userId == req.params.userId
    })
    res.send(tasks);
}

