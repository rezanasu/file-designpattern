const ProductRepository = require("../repositories/productRepository.js")
const {Category} = require("../models")

class ProductService {

    static create = async (params) => {
        try {
            const {title, sku, price, quantity, product_category_attributes} = params;

            const productPayload = {
                title,
                sku,
                price,
                quantity
            }
            
            const data = await ProductRepository.create(productPayload, product_category_attributes)
            return data;
        } catch(err) {
            throw err
        }
    }

    static findAll = async (params = {}) => {

        try {
            const {category_id} = params;

            const filterOptions = {
                include: {
                    model: Category
                }
            }

            if(category_id) {
                filterOptions.include = {
                    model: Category,
                    where: {
                        id: category_id
                    }
                }
            }
            const data = await ProductRepository.findAll(filterOptions)
            return data;
        } catch(err) {
            throw err;
        }
    }

    static findOne = async (params) => {

        try {
            const {id} = params;
            const queryOptions = {
                where: {
                    id
                },
                include: {
                    model: Category
                }
            }

            const data = await ProductRepository.findOne(queryOptions)
            return data;
        } catch(err) {
            throw err
        }
    }

    static uploadImage = async (params) => {

        try {
            const {file, id} = params;

            const image_url = `http://localhost:3000/uploads/${file.filename}`
            const payload = {
                image_url
            }
            const data = await ProductRepository.uploadImage(id, payload);
            return data;
        } catch(err) {
            throw err;
        }
    }

    static destroy = async (params) => {
        try {
            const {id} = params;

            await ProductRepository.destroy(id)
        } catch(err) {
            throw err;
        }
    }
}

module.exports = ProductService;