const mongoose = require("mongoose");
require("dotenv").config();

function DbConfig() {
  const mongoUri = process.env.MONGO_URL;
  mongoose.set("strictQuery", false);

  const config = mongoose
    .connect(mongoUri, { useNewUrlParser: true })
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log(err));

  return config;
}

module.exports = DbConfig;
