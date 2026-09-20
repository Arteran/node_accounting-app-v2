const userService = require('../services/user_service');

const get = (req, res) => {
  res.send(userService.getAll());
};

const getOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.statusCode = 400;
    res.send('Bad request');

    return;
  }

  const user = userService.getById(id);

  if (!user) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  res.send(user);
};

const create = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.statusCode = 400;
    res.send('Bad request');

    return;
  }

  const user = userService.createUser(name);

  res.statusCode = 201;

  res.send(user);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!userService.getById(id)) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  userService.remove(id);
  res.sendStatus(204);
};

const update = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  if (!name || !id) {
    res.statusCode = 400;
    res.send('Bad request');

    return;
  }

  if (!userService.getById(id)) {
    res.statusCode = 404;
    res.send('Not found');

    return;
  }

  const newUser = userService.update({ name, id });

  res.send(newUser);
};

module.exports = {
  get,
  getOne,
  create,
  remove,
  update,
};
