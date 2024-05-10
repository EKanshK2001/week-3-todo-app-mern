const express = require('express');
const { todoRouter }  = require('./routers/todoRouter');
const cors = require('cors')
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/todos', todoRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

