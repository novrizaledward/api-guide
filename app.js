const express = require("express");
const app = express();
const path = require('path');
const dbConfig = require("./src/config/database");
const router = require("./src/router/route");

dbConfig();
require("dotenv").config();

app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
