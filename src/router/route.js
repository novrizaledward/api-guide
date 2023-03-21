const express = require("express");
const upload = require("../utils/upload");
const { CreateContent, ReadContent } = require("../controllers/content");
const router = express.Router();

router.post("/content", upload.single("image"), CreateContent);
router.get("/content", ReadContent);

module.exports = router;
 