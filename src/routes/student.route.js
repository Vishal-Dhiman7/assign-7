const router = require("express").Router();
const pathCon = require("../controller/info.controller")

router.post("/post",pathCon.AddInfo);

module.exports = router;