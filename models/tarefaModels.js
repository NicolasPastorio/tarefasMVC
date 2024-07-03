const db = require('./database');

class Tarefa {
  constructor(date, title, description, id = null){
    this.date = date;
    this.title = title;
    this.description = description;
    this.id = id;
  }

  async salvar(){
    let sql = null;

    if(this.id === null){
      sql = `INSERT INTO tarefa(title, description, usuario_id_usuario)
      VALUES (?, ?, 2)`;
      return await db.query(sql, [this.title, this.description]);
    } else {
      sql = `UPDATE tarefa SET title = ?, description = ? WHERE id = ?`;
      return await db.query(sql, [this.title, this.description, this.id]);
    }
  }

  static async listarTarefas(){
    const tarefas = await db.query(`SELECT * FROM tarefa`);
    return tarefas;
  }

  static async excluir(id){
    const sql = `DELETE FROM tarefa WHERE id_tarefa = ?`;
    return await db.query(sql, [id]);
  }
}

module.exports = Tarefa;
