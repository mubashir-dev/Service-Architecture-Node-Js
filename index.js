const express = require('express');
const app = express();
require('dotenv').config();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
