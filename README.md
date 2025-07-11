# ToDo App Full Stack

Este foi meu primeiro app full stack, desenvolvido para colocar em prática os conhecimentos adquiridos no curso de Node.js da @ Rocketseat.

Tratei de deixar todo o código **bem comentado** para me ajudar a entender cada parte do projeto enquanto desenvolvia. Por isso, você vai encontrar muitos comentários explicativos no código, que facilitam a leitura e a manutenção.

## Sobre o projeto

Aplicação completa de lista de tarefas (ToDo List) com backend e frontend integrados, feita para aprender e praticar conceitos fundamentais de desenvolvimento web full stack.

## Tecnologias utilizadas

- Frontend: React  
- Backend: Node.js, Express  

## Funcionalidades

- Criar e excluir tarefas  
- Interface responsiva e amigável  
- Persistência dos dados

## Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado  

### Passo a passo

### Clone o repositório
```bash
git clone https://github.com/francinedds/todo-app-full-stack.git
cd todo-app-full-stack
```

### Instale as dependências no backend
```bash
cd backend
npm install
```

### Crie o arquivo de variáveis de ambiente no backend (exemplo)
```bash
echo "PORT=5000
DATABASE_URL=mongodb://localhost:27017/todoapp
JWT_SECRET=sua_chave_secreta" > .env
```

### Rode o backend
```bash
npm start
```

### Em outra aba do terminal, vá para o frontend
```bash
cd ../frontend
npm install
npm start
```

Depois, abra http://localhost:3000 no navegador para usar a aplicação.

### Estrutura do projeto
/backend - Código do servidor e API

/frontend - Código da interface do usuário em React

### Contribuição
Esse projeto é principalmente para aprendizado, mas contribuições são sempre bem-vindas! Abra uma issue ou envie um pull request.

### Licença
Projeto licenciado sob MIT License.
