class Tarefa{
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    async salvar(){
        const db = require("./database");
        let sql = null;
        if(this.id == ''){
            sql = `INSERT INTO tarefa (title, description, usuario_id_usuario) VALUES ("${this.title}", "${this.description}", 1);`;
        }else{
            sql=``;
        }
        return await db.query(sql);
    }

    static async listarTarefas(){
        const db = require('./database');
        tarefas = await db.query(`SELECT * FROM tarefa`);
        return tarefas;
    }
}

module.exports = Tarefa;