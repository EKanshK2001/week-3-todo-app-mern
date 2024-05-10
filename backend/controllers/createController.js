const { Todo } = require("../db");
const { createTodo } = require("../types");

const createController = async (req, res) => {
    //get todo body
    const todo = req.body;

    //zod validation
    const parsedTodo = createTodo.safeParse(todo);

    if(!parsedTodo.success) {
        res.status(400).json({
            msg: "incorrect inputs"
        })
    }

    //adding to mongoDB
    try {
        await Todo.create({
            title: todo.title,
            description: todo.description,
            completed: false,
        });
        res.json({
            msg: "todo created successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: "there was error connecting to the db"
        })
    }
    
}

module.exports = {
    createController
}