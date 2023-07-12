const router = require('express').Router();

const {
    userTaskDetailsCtrl,
    userTaskCreatorCtrl,
    userTasksListCtrl,
    homeCtrl
} = require("../controllers/app.ctrl.js")

router.get("/user/:userId/task/:taskId", userTaskDetailsCtrl,);
router.get("/user/:userId/addTask", userTaskCreatorCtrl);
router.get("/user/:userId/tasks", userTasksListCtrl);
router.get("/home",homeCtrl);

module.exports = router;
