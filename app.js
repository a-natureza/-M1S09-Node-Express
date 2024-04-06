// Importar o módulo Express
const express = require('express');

// Inicializar o aplicativo Express
const app = express();

// Middleware temporário para logar o URL das solicitações
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl); // Loga o URL da solicitação
  next(); // Continua para o próximo middleware ou rota
});

// Middleware para registrar detalhes da solicitação
app.use((req, res, next) => {
  const now = new Date().toLocaleString();
  console.log(`${now} - ${req.method} ${req.url}`);
  next(); // Passa o controle para o próximo middleware ou rota
});

// Servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Definir uma rota básica para a página inicial
app.get('/', (req, res) => {
  res.send('Olá, mundo com Express!');
});

// Rota /sobre
app.get('/sobre', (req, res) => {
  res.send('Sobre o aplicativo: Este é um exemplo de aplicativo Express.');
});

// Rota /contato
app.get('/contato', (req, res) => {
  res.send('Contato: Você pode nos contatar através do e-mail exemplo@exemplo.com.');
});

// Rota /produto/:id
app.get('/produto/:id', (req, res) => {
  // Acessa o ID do produto fornecido como parâmetro na URL
  const produtoId = req.params.id;
  // Envia uma resposta personalizada incluindo o ID do produto
  res.send(`Detalhes do produto com ID: ${produtoId}`);
});



// O servidor escuta na porta 3693
app.listen(3693, () => {
  console.log('Servidor rodando na porta 3693');
});
