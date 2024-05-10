const express = require('express');
const { todoRouter }  = require('./routers/todoRouter');
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/todos', todoRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

