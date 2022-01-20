const mongoose = require('mongoose')
require('dotenv').config()

const mongooseOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URL, {
    mongooseOptions
}, (err) => {
    if (!err) {
        console.log(`DB CONNECTED TO :  ${process.env.MONGO_DB}`)
    } else {
        console.log(`DB CONNECTION  FAILED ${err.stack}`)
    }
});

module.exports.connection = mongoose.connection;
