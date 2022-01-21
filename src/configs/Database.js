const mongoose = require('mongoose')
const logger = require('../services/LoggerService');
require('dotenv').config()

const mongooseOptions = {
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URL,
    mongooseOptions, (err) => {
        if (!err) {
            logger.info(`Database connected : ${process.env.MONGO_DB}`)
        } else {
            logger.error(`Database Connection Failed : ${err.stack}`)
        }
    });

module.exports.connection = mongoose.connection;
