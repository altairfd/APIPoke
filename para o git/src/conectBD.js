//Conectando ao banco de dadaos
const mysql = require('serverless-mysql')({
    config: {
        host: 'localhost',
        database: 'pokemon',
        user: 'root',
        password: ''
    }
});
//Exportando para utilização em qualquer aplicativo
module.exports = mysql;