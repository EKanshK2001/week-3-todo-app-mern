const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('database connected')
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const Todo = mongoose.model(todoSchema);

module.exports = {
    Todo
}