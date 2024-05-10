import { createTodo } from '../types';

export const createController = (req, res) => {
    const todo = req.body;

    const parsedTodo = createTodo.safeParse(todo);

    if(!parsedTodo.success) {
        res.status(400).json({
            msg: "incorrect inputs"
        })
    }
    
}