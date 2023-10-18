// Menerima Request
// Mengirim Response
const CategoryService = require("../services/categoryService.js")

class CategoryController {

    static create = async (req, res, next) => {
        try {
            const data = await CategoryService.create(req.body)

            res.status(201).json(data)
        } catch(err) {
            next(err)
        }
    }

    static findAll = async (req, res, next) => {
        try {
            const data = await CategoryService.findAll()

            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            
            const data = await CategoryService.findOne(req.params)

            if(!data) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json(data);
        } catch(err) {
            next(err);
        }
    }

}

module.exports = CategoryController;