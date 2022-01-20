const Product = require("../models/Product");
const ObjectId = require('mongoose').Types.ObjectId;
const httpError = require("http-errors");
const {productSchema} = require('../validations/Product')


//create product
exports.create = async (req, res, next) => {
    try {
        const validationResult = productSchema.validate(req.body, {abortEarly: false});
        if (!_.isEmpty(validationResult.error)) {
            let _errors = [];
            validationResult.error.details.forEach((element) => {
                _errors.push(element.message);
            });
            res.status(422).send({
                errors: _errors
            });
        } else {
            const nameExist = await Product.findOne({name: req.body.name})
            if (nameExist) {
                next(new httpError(422, {
                    message: `This ${req.body.name} name is already been registered`
                }));
            }
            const product = new Product({
                name: req.body.name,
                description: req.body.description,
                image: '/products/' + req.file.filename,
                price: req.body.price,
                quantity: req.body.quantity,
                category: req.body.category,
                user: user._id
            })
            const result = await product.save();
            res.status(200).send({
                message: "Product has been Created",
                user: result
            });
        }

    } catch (error) {
        next(new httpError(500, {
            message: error.message
        }));
    }
};