const express = require('express');
const routes = express.Router();

const bovinoController = require('./controllers/BovinoController');

routes.get('/bovinos', bovinoController.index);
routes.get('/bovinos/:id', bovinoController.show);

routes.get('/bovinos', bovinoController.showAll);
routes.post('/bovinos', bovinoController.store)
routes.put('/bovinos/:id', bovinoController.update);
routes.delete('/bovinos/:id', bovinoController.destroy);

module.exports = routes;