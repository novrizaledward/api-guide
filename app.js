const express = require("express");
const app = express();
const dbConfig = require("./src/config/database");
const router = require("./src/router/route");

dbConfig();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
