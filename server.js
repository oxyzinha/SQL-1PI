const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const publicDir = path.join(__dirname, 'public'); // Caminho para o diretório public
const indexPath = path.join(publicDir, 'index.html'); // Caminho para o arquivo index.html

// Rota para a página inicial
app.get('/', (req, res) => {
    // Serve o arquivo index.html
    res.sendFile(indexPath);
});

// Rota para fornecer os dados do banco de dados
app.get('/dados', (req, res) => {
    const db = new sqlite3.Database('alunos.db');
    const query = 'SELECT * FROM Alunos';

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.json(rows);
    });

    db.close();
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
