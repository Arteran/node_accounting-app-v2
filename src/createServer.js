'use strict';

const express = require('express');
const cors = require('cors');
const userService = require('./services/user_service');
const expensesService = require('./services/expenses_service');
const { router: userRouter } = require('./routes/user_route');
const { router: expensesRouter } = require('./routes/expenses_route');

function createServer() {
  userService.clear();
  expensesService.clear();

  const app = express();

  app.use(cors());

  app.use('/users', express.json(), userRouter);

  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
