const { createController } = require('../controllers/createController');
const { madController } = require('../controllers/madController');
const { viewController } = require('../controllers/viewController');

const { Router } = require('express')

const todoRouter = Router();

todoRouter.get('/', viewController)
todoRouter.post('/create', createController)
todoRouter.put('/markasdone', madController)

module.exports = {
    todoRouter
};