let expenses = [];

const clear = () => {
  expenses = [];
};

const getAll = (filters = {}) => {
  const { userId, categories, from, to } = filters;
  let result = expenses;

  if (userId) {
    result = result.filter((expense) => expense.userId === Number(userId));
  }

  if (categories) {
    const categoriesList = Array.isArray(categories)
      ? categories
      : [categories];

    result = result.filter((expense) => {
      return categoriesList.includes(expense.category);
    });
  }

  if (from) {
    result = result.filter((expense) => expense.spentAt >= from);
  }

  if (to) {
    result = result.filter((expense) => expense.spentAt <= to);
  }

  return result;
};

const getById = (id) => {
  return expenses.find((expense) => expense.id === Number(id));
};

const create = (newObj) => {
  const newExpense = {
    id: expenses.reduce((max, item) => Math.max(max, item.id), 0) + 1,
    ...newObj,
  };

  expenses.push(newExpense);

  return newExpense;
};

const remove = (id) => {
  expenses = expenses.filter((expense) => expense.id !== Number(id));
};

const update = ({ id, ...obj }) => {
  const expense = getById(id);

  Object.assign(expense, obj);

  return expense;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  clear,
};
