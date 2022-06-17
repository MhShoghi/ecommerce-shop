const express = require("express");
const router = express.Router();

const {
  userSignupValidator,
  userSigninValidator,
} = require("../validator/index");

const {
  signup,
  signin,
  signout,
  requireSingin,
} = require("../controllers/auth");

router.post("/signup", userSignupValidator, signup);

router.post("/signin", userSigninValidator, signin);

router.get("/signout", signout);

router.get("/hello", requireSingin, (req, res) => {
  res.send("Hello there");
});
module.exports = router;
