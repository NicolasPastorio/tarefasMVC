const Tarefa = require("../models/tarefaModel.js");

async function getTarefas(req, res){
  const tarefas = await Tarefa.listarTarefas();
  res.render("tarefaView", { tarefas });
}

async function addTarefa(req, res){
  const { title, description } = req.body;

  const tarefa = new Tarefa(new Date().toLocaleString("pt-br"), title, description);
  await tarefa.salvar();

  res.redirect("/");
}

async function excluirTarefa(req, res){
  const { id } = req.body; // Verifica se o id está sendo corretamente extraído
  if (!id) {
    return res.status(400).send('ID da tarefa é necessário.');
  }

  await Tarefa.excluir(id);

  res.redirect("/");
}

module.exports = { getTarefas, addTarefa, excluirTarefa };
