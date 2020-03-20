const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "🛸🛸🛸"
  });
});

app.use((req, res, next) => {
  const error = new Error(`Error Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🛹" : error.stack
  });
});

const port = process.env.PORT || 1998;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
