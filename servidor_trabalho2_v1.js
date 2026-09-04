const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Para rodar o servidor use o comando no terminal: node servidor_trabalho2_v1.js
//Caso dê erro utilize o seguinte comando no terminal para instalar no seu sistema: npm install express cors
//Para encerrar o servidor aperte CTRL + C no terminal

let alunos = [
  { id: 1, ra: "2025001", nome: "Batman da silva", celular: "(14) 99342-1432", email: "batima@gmail.com" },
  { id: 2, ra: "2025002", nome: "Juscelino kubitschek", celular: "(14) 99722-1111", email: "juscelino@email.com" },
  { id: 3, ra: "2025003", nome: "Terry Crews", celular: "(11) 99955-3333", email: "terrycrews@email.com" }
];

let proximoId = 4;


app.get("/alunos", (req, res) => {
  res.json(alunos);
});

app.post("/alunos", (req, res) => {
  const { ra, nome, celular, email } = req.body;

  if (!ra || !nome || !celular || !email) {
    return res.status(400).json({ erro: "Preencha todos os campos!" });
  }

  const novoAluno = {
    id: proximoId++,
    ra,
    nome,
    celular,
    email
  };

  alunos.push(novoAluno);
  res.json({ mensagem: "Aluno cadastrado com sucesso!", aluno: novoAluno });
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

