## Commands Used

# Prod

`npm install express cors morgan helmet dotenv`

# Beta

`npm install -D eslint nodemon`

# Initialize linter

`npx eslint --init`

# Point the package to src

```
"main": "src/index.js",
 "scripts": {
    "start": "node src/index.js",
    "dev" : "nodemon src/index.js",
    "lint" : "eslint src/"
  }
```

## Index.js File

```
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "🛸🛸🛸"
  });
});

const port = process.env.PORT || 1998;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
```

# Create a middleware (Basically a error handler)
