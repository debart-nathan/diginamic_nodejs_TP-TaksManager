const router = require('express').Router();

const {
    getUsersCtrl,
    getUserTasksCtrl,
    patchUserTaskDone
} = require("../controllers/api.ctrl.js")

router.get("/api/users",getUsersCtrl);
router.get("/api/user/:userId/tasks",getUserTasksCtrl);
router.patch("/api/user/task/done",patchUserTaskDone)

module.exports = router;
