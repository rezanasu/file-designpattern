const express = require("express")
const router = express.Router();
const categoryRouter = require("./category.js")
const productRouter = require("./product.js")

// ========> prefix
router.use("/categories", categoryRouter);
router.use("/products", productRouter);

module.exports = router;