const express = require('express');
const app = express();
const path = require('path');
const db_connection = require('./src/configs/Database');
const logger = require('./src/services/LoggerService');
const routing = require('./src/routes/routes');
require('dotenv').config();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Routing
app.use('/product',routing.product);

//Server Listening
app.listen(process.env.PORT, () => {
    logger.info(`Server is running on  127.0.0.1:${process.env.PORT}`);
})

module.exports = app;


