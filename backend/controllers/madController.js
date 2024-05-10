import { updateTodo } from "../types";


export const madController = (req, res) => {
    const todoId = req.body;

    const parsedTodoId = updateTodo.safeParse(todoId);

    if (!parsedTodoId.success) {
        res.status(400).json({
            msg: "incorrect inputs"
        })
    }
}