const { resolve } = require("path");
const db = require("../db/db.json");
const {updateJSON} = require("./utils/dataManip.js");

exports.getUsersCtrl = (req, res) => {
    res.send(db.users);
}

exports.getUserTasksCtrl = (req, res) => {
    const tasks = db.tasks.filter((task) => {
        return task.userId == req.params.userId
    })
    res.send(tasks);
}

exports.patchUserTaskDone = (req, res) => {
    const dbTaskI = db.tasks.findIndex((task) => {
        return task.id == req.body.taskId;
    })

    if(dbTaskI==-1){
        const er = new Error("ERROR 404 : The task couldn't be found in the database");
        res.status(404).json({error:er})
        return;
    }
    if(db.tasks[dbTaskI].userId!==req.body.userId){
        const er = new Error("ERROR 403 : You are not the User associated with this task");
        res.status(403).json({error:er})
        return;
    }
    
    db.tasks[dbTaskI].done = req.body.done
    updateJSON(db);

    res.status ="200";
    res.send(db.tasks[dbTaskI]);
}

