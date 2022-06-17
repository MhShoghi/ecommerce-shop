const { errorHandler } = require("../helpers/dbErrorHandler");
const User = require("../models/user");

exports.signup = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }

    res.json({
      user,
    });
  });
};
