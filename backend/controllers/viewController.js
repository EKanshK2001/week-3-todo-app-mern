const { Todo } = require("../db")

const viewController = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json({todos: todos});

    } catch (error) {
        res.status(500).json({
            msg: "there was error connecting to the db"
        })
    }
}

module.exports = {
    viewController
}