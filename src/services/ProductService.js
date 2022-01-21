const Product = require("../models/Product");
const CurdService = require('./CurdService');

exports.index = async () => {
    return CurdService.find(Product);
}

async function store() {

}

async function findByName() {
}

async function findById() {
}

async function update() {
}

async function destroy() {
}