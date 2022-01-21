exports.create = (model, body) => {
    const instance = new model(body);
    return instance.save();
}
exports.destroy = (model, id) => {
    return model.findByIdAndDelete({
        _id: id
    });
}

exports.findOne = (model, param, value) => {
    return model.findOne({
        param: value
    });
}

exports.find = (model) => {
    return model.find();
}

exports.findById = (model, id) => {
    return model.findById({
        _id: id
    });
}

exports.update = (model, id, body) => {
    return model.findByIdAndUpdate({_id: id}, body);
}