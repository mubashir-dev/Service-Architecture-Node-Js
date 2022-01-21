const ObjectId = require('mongoose').Types.ObjectId;
const httpError = require("http-errors");
const ProductService = require('../services/ProductService');

exports.index = async (req, res, next) => {

    try {
        const data = await ProductService.index();
        return res.status(200).send({
            data: data
        });
    } catch (exception) {
        next(new httpError(500, {
            message: exception.message
        }));
    }
}