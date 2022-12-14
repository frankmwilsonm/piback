const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const tasksRouter = require('./tasks.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/proyectos', productsRouter); // /products
  router.use('/tasks', tasksRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
