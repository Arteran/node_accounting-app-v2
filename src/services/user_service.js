let users = [];

const clear = () => {
  users = [];
};

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find((user) => user.id === Number(id)) || null;
};

const createUser = (name) => {
  const newUser = {
    id: users.reduce((max, user) => Math.max(max, user.id), 0) + 1,
    name,
  };

  users.push(newUser);

  return newUser;
};

const remove = (id) => {
  users = users.filter((user) => user.id !== Number(id));
};

const update = ({ name, id }) => {
  const user = getById(id);

  Object.assign(user, { name });

  return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
  remove,
  update,
  clear,
};
