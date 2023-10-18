// Berhubungan langsung dengan database
const {Category} = require("../models")

class CategoryRepository {

    static create = async (params) => {

        try {
            const data = await Category.create(params, {
                returning: true
            })
            return data;
        } catch(err) {
            throw err
        }
    }

    static findAll = async () => {
        try {
            const data = await Category.findAll();
            return data;
        } catch(err) {
            throw err
        }
    }

    static findOne = async (id) => {
        try {
            const data = await Category.findOne({
                where: {
                    id
                }
            })

            return data;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = CategoryRepository;