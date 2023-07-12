const router = require('express').Router();

const {
    getUsersCtrl,
    getUserTasksCtrl
} = require("../controllers/api.ctrl.js")

router.get("/api/users",getUsersCtrl);
router.get("/api/user/:userId/tasks",getUserTasksCtrl);

module.exports = router;
