// 1 - Importar o Sequelize
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config')

// 3 - Cria a conexão
const conexao = new sequelize(config)

async function levantarFuncioarios(){
    try {
        let resultado = await conexao.query("SELECT * FROM funcionarioss LIMIT 0, 10");
        console.log(resultado);
            
    } catch (error) {
        console.log('Não rolou amigo');
        console.log(error)    
    }
    conexao.close;
}

levantarFuncioarios();