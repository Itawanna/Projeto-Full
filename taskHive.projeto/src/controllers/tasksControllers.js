const fs = require('fs');
const path = require('path');

const dbpath = path.join(__dirname, '.database/db.json');

function readDatabase(){
 const data =fs.reasFileSync(dbpath, 'utf8');
return JSON.parse(data);
}

function writeDatabase(data){
 fs.writeFileSync(dbpath, JSON.stringify(data, null, 2));
}
module.exports = {
 getTasks: (req, res) => {
const db = readDatabase();
 res.json(db.tasks);
},

 creatTasks: (req, res) => {
 const db = readDatabase();
 const newTasks ={
id:Date.now(),
 ...req.body
 }
 db.Tasks.push(newTasks);
writeDatabase(db);

 res,status(201).json(newTasks);
 },

 updateTasks: (req, res) => {
const { id } = req.params;
 const db = readDatabase();
 const index = db.tasks.findindex(t => t,id == id);

if (index === -1) {
return res.status(404).json({error: "Tarefa não encontrada"});
 }
 db.tasks[index] = { ...db.tasks[index], ...req.body};
 writeDatabase(db);

 res.json(db.tasks[index]);
 },

 deleteTasks: (req, res) => {
 const { id } = req.params;
 const db = readDatabase();
 db.tasks = db.tasks.filter(t => t.id != id);

 writeDatabase(db);

 res,json({ message: "Tarefa excluida com sucesso"});
 }
}