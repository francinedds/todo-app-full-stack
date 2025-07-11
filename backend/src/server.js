// Importa os módulos Express (para criar o servidor) e CORS (para permitir chamadas de outros domínios)
const express = require('express');
const cors = require('cors');

const app = express(); // Cria o app Express
const PORT = 3000;     // Define a porta onde a API vai rodar

app.use(cors()); // Permite que o frontend (localhost:5173) acesse a API (localhost:3000)
app.use(express.json()); // Permite que o servidor entenda JSON enviado no corpo das requisições

// Lista de tarefas (armazenada em memória — reinicia a cada vez que o servidor é reiniciado)
let tasks = [];

// Rota GET /tasks — retorna todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks); // Envia a lista de tarefas como JSON
});

// Rota POST /tasks — adiciona uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title } = req.body; // Extrai o título da tarefa do corpo da requisição

  // Verifica se o título foi enviado
  if (!title) {
    return res.status(400).json({ error: 'Título é obrigatório' });
  }

  // Cria uma nova tarefa com um ID único (timestamp) e o título enviado
  const newTask = {
    id: Date.now(), // ID como número
    title
  };

  console.log('🆕 Tarefa criada:', newTask, 'Tipo do ID:', typeof newTask.id);

  // Adiciona a nova tarefa na lista
  tasks.push(newTask);

  // Retorna a nova tarefa criada com status 201 (Created)
  res.status(201).json(newTask);
});

// Rota DELETE /tasks/:id — remove uma tarefa pelo ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  console.log('Tentando deletar tarefa com ID:', id);
  console.log('Estado atual do array tasks:', tasks);

  const taskIndex = tasks.findIndex(task => task.id == id);

  if (taskIndex === -1) {
    console.log('Tarefa não encontrada para exclusão.');
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  tasks.splice(taskIndex, 1);
  console.log('Tarefa removida. Estado atualizado:', tasks);
  res.sendStatus(204);
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

