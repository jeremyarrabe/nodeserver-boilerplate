const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const middleware = require("./middleware");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "🛸🛸🛸"
  });
});

app.use(middleware.notFound);
app.use(middleware.generalHandler);

const port = process.env.PORT || 1998;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
