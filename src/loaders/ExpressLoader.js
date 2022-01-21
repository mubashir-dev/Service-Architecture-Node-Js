const express = require('express');
const path = require('path');
const db_connection = require('../configs/Database');
const logger = require('../services/LoggerService');
const routes = require('../routes/index');
require('dotenv').config();
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Routing
app.use('/products',routes.Product)

//Server Listening
app.listen(process.env.PORT, () => {
    logger.info(`Server is running on  127.0.0.1:${process.env.PORT}`);
})

module.exports = app;


