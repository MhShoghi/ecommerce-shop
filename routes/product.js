const router = require("express").Router();

router.post("/create", requireSignin, isAuth, isAdmin, create);

module.exports = router;
