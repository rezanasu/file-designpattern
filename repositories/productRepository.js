const {Product, Category, ProductCategory} = require("../models")

class ProductRepository {

    static create = async (productParams, productCategoryParams) => {

        try {

            const data = await Product.create(productParams, {
                returning: true
            })

            for(let i = 0; i < productCategoryParams.length; i++) {
                const currentItem = productCategoryParams[i]

                const newObject = {
                    product_id: data.id,
                    category_id: currentItem.category_id
                }

                await ProductCategory.create(newObject)
            }

            return data;
        } catch(err) {
            throw err;
        }
    }

    static findAll = async(params) => {
        try {
            const data = await Product.findAll(params)
            return data;
        } catch(err) {
            throw err;
        }
    }

    static findOne = async (params) => {
        try {
            const data = await Product.findOne(params);
            return data;
        } catch(err) {
            throw err;
        }
    }

    static uploadImage = async (id, payload) => {
        try {
            const foundProduct = await Product.findOne({
                where: {
                    id
                }
            })

            if(!foundProduct) {
                throw {name: "ErrorNotFound"}
            }

            await foundProduct.update(payload)
            return foundProduct
        } catch(err) {
            throw err;
        }
    }

    static destroy = async (id) => {
        try {
            const foundProduct = await Product.findOne({
                where: {
                    id
                }
            })

            if(!foundProduct) {
                throw {name: "ErrorNotFound"}
            }

            await foundProduct.destroy();

        } catch(err) {
            throw err;
        }
    }
}

module.exports = ProductRepository;