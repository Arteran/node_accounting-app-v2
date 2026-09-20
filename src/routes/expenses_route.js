const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expenses_controller');

router.get('/', expensesController.get);

router.get('/:id', expensesController.getOne);

router.post('/', expensesController.create);

router.delete('/:id', expensesController.remove);

router.patch('/:id', expensesController.update);

module.exports = { router };
