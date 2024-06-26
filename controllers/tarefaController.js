const Tarefa = require('../models/tarefa');
const tarefas = [];

async function getTarefas(req, res){
    tarefas = await Tarefa.listarTarefas();
    res.render('tarefas', {tarefas});
}

async function addTarefa(req, res){
    const { id, title } = req.body;
    const tarefa = new Tarefa(id, title, false);
    tarefas.push(tarefa);
    res.redirect('tarefas');
}

module.exports = { getTarefas, addTarefa };