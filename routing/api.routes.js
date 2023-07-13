const router = require('express').Router();

const {
    getUsersCtrl,
    getUserTasksCtrl,
    patchUserTaskDone,
    postUserTask
} = require("../controllers/api.ctrl.js")

router.get("/api/users",getUsersCtrl);
router.get("/api/user/:userId/tasks",getUserTasksCtrl);
router.patch("/api/user/task/done",patchUserTaskDone);
router.post("/api/user/task/add",postUserTask);

module.exports = router;
