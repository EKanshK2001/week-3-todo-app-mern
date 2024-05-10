const { Todo } = require("../db");
const { updateTodo } = require("../types");

const madController = async (req, res) => {
    const todoId = req.body;

    const parsedTodoId = updateTodo.safeParse(todoId);

    if (!parsedTodoId.success) {
        res.status(400).json({
            msg: "incorrect inputs"
        })
        return;
    }

    try {
        await Todo.findByIdAndUpdate(todoId.id, {
            completed: true
        })

        res.json({
            msg: "todo marked as done!"
        })

    } catch (error) {
        res.status(500).json({
            msg: "there was error connecting to the db"
        })
    }
}

module.exports = {
    madController
}