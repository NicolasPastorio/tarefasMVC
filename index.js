const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const tarefaController = require('./controllers/tarefaController');
const usuarioController = require('./controllers/usuarioController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use('/static', express.static('public'));
app.get('/', (req, res) => {res.send("<h1>API Tarefas</h1>")});
app.use(express.urlencoded({ extended: true }));
app.get('/tarefas', (req, res) => {
    if(req.session.user){
        tarefaController.getTarefas(req, res);
    }else{
        return res.redirect('/login');
    }
});
app.get('/tarefa/delete/:id', tarefaController.deleteTarefa);
app.get('/login', usuarioController.login);
app.use(session({secret: 'i1n2f3o4'}));
app.get('/login', usuarioController.login);
app.post('/usuario/autenticar', usuarioController.autenticar);
app.post('/tarefas', tarefaController.addTarefa);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
