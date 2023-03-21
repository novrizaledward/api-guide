const ContentModel = require("../models/content");

const CreateContent = async (req, res) => {
  try {
    const DataRequest = ContentModel({
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
    });

    const Respone = await DataRequest.save();

    return res.status(200).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Succesfully Save Content",
      data: Respone,
    });
  } catch (error) {
    return res.status(500).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Internal Server Error!",
    });
  }
};

const ReadContent = async (req, res) => {
  try {
    const Respone = await ContentModel.find();

    return res.status(200).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Succesfully Load Content",
      data: Respone,
    });
  } catch (error) {
    return res.status(500).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Internal Server Error!",
    });
  }
};

module.exports = {
  CreateContent,
  ReadContent,
};
