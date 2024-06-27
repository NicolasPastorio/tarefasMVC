const Usuario = require('../models/usuarioModel');

function login(req, res){
    res.render('login');
}

async function autenticar(req, res){
    const resp = await Usuario.autenticar(req.body.email, req.body.senha);
    if(rep && resp.length > 0){
        req.session.user = resp[0];
        return res.redirect('/');
    }else{
        return res.redirect('/login');
    }
}

async function logout(req, res){
    delete req.session.user;
    res.redirect('/login');
}

module.exports = { login };