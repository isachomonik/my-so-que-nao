// 1 - Importar o Sequelize
const { request } = require('express');
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config');

// 3 - Cria a conexão
const conexao = new sequelize(config)

// 4 - Realiza a consulta (assincronas)
var promise = conexao.query('SELECT * FROM funcionarios LIMIT 1, 10');

// forma 1 de lidar com promessas: callbacks
promise.then(
    data => {
        conexao.close();
        console.log(data)
    }
).catch(
    err => {
        console.log("deu ruim");
    }
)

console.log(promise);


