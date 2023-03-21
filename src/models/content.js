const mongoose = require("mongoose");

const ContentSchema = mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    description: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    versionKey: false,
  }
);

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
