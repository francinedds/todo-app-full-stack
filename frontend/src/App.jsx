import { useState, useEffect } from 'react';
import { Trash } from 'phosphor-react';
import './App.css';

const API_URL = 'http://localhost:3000/tasks';

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick} aria-label="Excluir tarefa">
      <Trash size={16} weight="fill" />
    </button>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    setTitle('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Minhas Tarefas</h1>

        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite uma tarefa"
            className="input"
          />
          <button onClick={addTask} className="button">
            Adicionar
          </button>
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.title}</span>
              <DeleteButton onClick={() => deleteTask(task.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
