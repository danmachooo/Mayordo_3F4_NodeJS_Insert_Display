const express = require('express');
const routes = express.Router();
const controller = require('../controller/user_controller');

routes.get('/', controller.display);
routes.get('/create', controller.index);
routes.post('/save', controller.save);

module.exports = routes;