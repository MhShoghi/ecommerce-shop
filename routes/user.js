const express = require("express");
const router = express.Router();

const { findUserById } = require("../controllers/user");
const { requireSingin } = require("../controllers/auth");

router.get("/secret/:userId", requireSingin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.param("userId", findUserById);

module.exports = router;
