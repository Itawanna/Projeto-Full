const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const tasksRoutes = require('../routes/tasks');
app.use('/tasks', tasksRoutes);

const PORT = 3000;
app.listen(PORT, () =>{
  console.log('servidor rodando em http://localhost:${PORT}');
})