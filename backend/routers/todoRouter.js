import { createController } from '../controllers/createController';
import { madController } from '../controllers/madController';
import { viewController } from '../controllers/viewController';

const { Router } = require('express')

const todoRouter = Router();

todoRouter.get('/', viewController)
todoRouter.post('/create', createController)
todoRouter.put('/markasdone', madController)

export default todoRouter;