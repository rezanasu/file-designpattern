const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController.js")
const multer = require("multer");
const diskStorage = require("../middlewares/multer.js")

router.post("/", ProductController.create);
router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findOne);
router.put("/upload/:id", multer({storage: diskStorage}).single("image"), ProductController.uploadImage);
router.delete("/:id", ProductController.destroy)

module.exports = router;