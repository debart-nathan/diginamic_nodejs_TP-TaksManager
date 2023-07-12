const router = require('express').Router();

const {
    getUsersCtrl
} = require("../controllers/api.ctrl.js")

router.get("/api/users",getUsersCtrl)

module.exports = router;
