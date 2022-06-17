const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// import routes
const userRoutes = require("./routes/user");

const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`DB Connected`));

// middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routes middleware
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listen on Port ${PORT}`);
});
