const express = require("express");
const upload = require("../utils/upload");
const {
  CreateContent,
  ReadContent,
  DeleteContent,
} = require("../controllers/content");
const router = express.Router();

router.post("/content", upload.single("image"), CreateContent);
router.get("/content", ReadContent);
router.delete("/content", DeleteContent);

module.exports = router;
