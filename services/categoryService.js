const CategoryRepository = require("../repositories/categoryRepository.js")

class CategoryService {

    static create = async (params) => {
        try {
            const {title} = params
            const payload = {
                title
            }
            const data = await CategoryRepository.create(payload)
            return data;
        } catch(err) {
            throw err
        }

    }

    static findAll = async () => {
        try {
            const data = await CategoryRepository.findAll();
            return data;
        } catch(err) {
            throw err
        }
    }

    static findOne = async (params) => {
        try {
            const {id} = params;
    
            const data = await CategoryRepository.findOne(id)
            return data;
        } catch(err) {
            throw err
        }
    }
}

module.exports = CategoryService