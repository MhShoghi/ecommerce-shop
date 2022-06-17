const router = require("express").Router();
const { isAuth, isAdmin, requireSingin } = require("../controllers/auth");
const { create } = require("../controllers/category");
const { findUserById } = require("../controllers/user");

router.post("/create/:userId", requireSingin, isAuth, isAdmin, create);

router.param("userId", findUserById);
module.exports = router;
