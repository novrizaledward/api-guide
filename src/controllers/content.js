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
    if (Respone.length === 0)
      return res.status(404).send({
        code: res.statusCode,
        method: req.method,
        endpoint: req.url,
        message: "Content Not Found!",
      });

    const data = Respone.map((el) => {
      const imagePath = el.image;
      const imagePathFormatted = imagePath.replace(/\\/g, "/");
      const baseUrl = `${req.protocol}://${req.hostname}:${process.env.PORT}`;
      const imageUrl = `${baseUrl}/${imagePathFormatted}`;
      return {
        _id: el._id,
        date_time: el.createdAt,
        title: el.title,
        imageUrl: imageUrl,
        description: el.description,
      };
    });

    return res.status(200).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Succesfully Load Content",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      code: res.statusCode,
      method: req.method,
      endpoint: req.url,
      message: "Internal Server Error!",
    });
  }
};

const DeleteContent = async (req, res) => {
  try {
    const Respone = await ContentModel.deleteOne({ _id: req.body.id });
    if (Respone.deletedCount === 0)
      return res.status(404).send({
        code: res.statusCode,
        method: req.method,
        endpoint: req.url,
        message: "Content Is Not Found!",
      });
    else
      return res.status(200).send({
        code: res.statusCode,
        method: req.method,
        endpoint: req.url,
        message: `${Respone.deletedCount} Content Berhasil Di Hapus`,
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
  DeleteContent,
};
