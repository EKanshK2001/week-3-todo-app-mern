import { Todo } from "../db";
import { updateTodo } from "../types";


export const madController = async (req, res) => {
    const todoId = req.body;

    const parsedTodoId = updateTodo.safeParse(todoId);

    if (!parsedTodoId.success) {
        res.status(400).json({
            msg: "incorrect inputs"
        })
    }

    try {
        await Todo.findByIdAndUpdate(todoId, {
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