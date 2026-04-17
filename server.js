const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos (CSS, imagens) da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// ROTA HOME
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ROTA SOBRE - O segredo está aqui
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

// ROTA SERVIÇOS
app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'servicos.html'));
});

// ROTA CONTATO
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

// Este middleware captura qualquer rota que não foi definida acima
app.use((req, res) => {
    res.status(404).send(`
        <h1>Página não encontrada!</h1>
        <p>A DigitalServ ainda não criou a página: ${req.originalUrl}</p>
        <a href="/">Voltar para o Início</a>
    `);
});

app.listen(4000, () => console.log('Servidor rodando na porta 4000'));