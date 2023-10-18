const ProductService = require("../services/productService.js")

class ProductController {

    static create = async (req, res, next) => {
        try {

            const data = await ProductService.create(req.body)

            res.status(201).json(data);
        } catch(err) {
            next(err);
        }
    }

    static findAll = async (req, res, next) => {
        try {

            const data = await ProductService.findAll(req.query)

            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const data = await ProductService.findOne(req.params)
            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static uploadImage = async (req, res, next) => {
        try {
            const params = {
                file: req.file,
                id: req.params.id
            }

            const data = await ProductService.uploadImage(params)

            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

    static destroy = async (req, res, next) => {
        try {

            await ProductService.destroy(req.params);
            res.status(200).json({message: "Delete successfully"})
        } catch(err) {
            next(err);
        }
    }
}

module.exports = ProductController;