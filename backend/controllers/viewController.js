import { Todo } from "../db"


export const viewController = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos);

    } catch (error) {
        res.status(500).json({
            msg: "there was error connecting to the db"
        })
    }
}