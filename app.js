const express = require("express");
const app = express();
const morgan = require("morgan");

// Import Routes
const autRouter = require("././routes/authRoutes");

// Body parser
app.use(express.json());

// third party middleware
app.use(morgan("dev").white.bold);

// URL Encoded
app.use(express.urlencoded({ extended: false }));

// Mount Routers
app.use("/api/v1/auth", autRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    status: "fail",
  });
  next;
});

// custom errorHandler

module.exports = app;
