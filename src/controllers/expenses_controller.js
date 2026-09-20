const expensesService = require('../services/expenses_service');
const userService = require('../services/user_service');

const get = (req, res) => {
  const filters = req.query;

  res.send(expensesService.getAll(filters));
};

const getOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.statusCode = 400;
    res.send('Bad request');

    return;
  }

  const expense = expensesService.getById(id);

  if (!expense) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  res.send(expense);
};

const create = (req, res) => {
  const { userId, spentAt, title, amount, category, note } = req.body;

  if (
    !userService.getById(userId) ||
    !spentAt ||
    !title ||
    typeof Number(amount) !== 'number' ||
    !category ||
    !note
  ) {
    res.statusCode = 400;
    res.send('Bad request');

    return;
  }

  const newExpense = expensesService.create({
    userId,
    spentAt,
    title,
    amount,
    category,
    note,
  });

  res.statusCode = 201;
  res.send(newExpense);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!expensesService.getById(id)) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  expensesService.remove(id);
  res.sendStatus(204);
};

const update = (req, res) => {
  const { id } = req.params;

  if (!expensesService.getById(id)) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  const newExpenses = expensesService.update({
    id,
    ...req.body,
  });

  res.send(newExpenses);
};

module.exports = {
  get,
  getOne,
  create,
  remove,
  update,
};
