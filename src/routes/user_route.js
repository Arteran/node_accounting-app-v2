const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/', userController.get);

router.get('/:id', userController.getOne);

router.post('/', userController.create);

router.delete('/:id', userController.remove);

router.patch('/:id', userController.update);

module.exports = { router };
