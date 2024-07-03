async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;
  
    const mysql = require("mysql2/promise");
    require('dotenv').config();
  
    try{
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
  
      console.log("Conectouu no MySQL!");
      global.connection = connection;
  
      return connection;
    } catch(error){
      console.error("Erro ao conectar no MySQL!");
      throw error;
    }
  
  
  }
  
  async function query(sql, params){
    try{
      const conn = await connect();
      const [rows] = await conn.execute(sql, params);
  
      return rows;
    } catch(error){
      console.error("Erro ao executar a consulta: ", error);
      throw error;
    }
  }
  
  module.exports = { query };
  