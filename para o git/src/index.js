//Dados do banco de dados
const database = require("./conectBD");

//Variáveis para bd 
let pokemon = [];

//Importando express e cors
const express = require("express");
const cors = require("cors");

//Rotas
const rotas = express.Router();

//Rota principal 
rotas.get('/', (req, res) => {
    res.send("Conexão realiza com sucesso")
});

//Colocando a função na solicitação da API
rotas.get("/pokemon/:nome", (req, res) =>{
    async function getInfoPoke() {
        try {
            pokemon = await database.query(
                `SELECT * FROM pokemon;`
            );
            return pokemon
        } catch (error) {
            console.log(error)
        }
    }
    getInfoPoke();

    const nome = req.params.nome;
    let pokes = {};
    for (let info of pokemon) {
        if (info.nome == nome) {
            pokes = info;
            break;
        };
    }
    database.end;
    return res.status(200).json(pokes)
})

//Funções


//Configurações do servidor
const app = express();
app.use(cors());
app.use(express.json());
app.use(rotas);
const port = 333;

//Iniciando o servidor
app.listen(port, () => console.log("Acessando http://localhost:333"))