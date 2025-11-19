TaskHive – Backend (Node.js)

Este é o back e front do **Task Horizon**, um gerenciador de projetos e tarefas semelhante ao Unleashed. Ele foi construído em **Node.js**, utilizando **Express**, com um banco de dados simples baseado em arquivo (`db.json`).

---

## 🚀 Tecnologias utilizadas

* **Node.js** – Ambiente de execução JavaScript
* **Express** – Framework para criação da API
* **CORS** – Permite que o front-end acesse a API
* **Nodemon** – Reinicia o servidor automaticamente durante o desenvolvimento

---

## 📁 Estrutura de pastas

```
backend/
 └── src/
      ├── server.js
      ├── routes/
      │     └── tasks.js
      ├── controllers/
      │     └── tasksController.js
      └── database/
            └── db.json
```

**server.js** → inicia o servidor e registra as rotas
**routes/** → define os endpoints da API
**controllers/** → lógica de manipulação de dados
**database/db.json** → banco de dados local

---

## 📦 Instalação

1. Abra o terminal na pasta **backend**
2. Execute os seguintes comandos:

```
npm install
npm install express cors
npm install --save-dev nodemon
```

---

## ⚙️ Scripts configurados no package.json

```
"scripts": {
  "dev": "nodemon src/server.js"
}
```

Para iniciar o servidor:

```
npm run dev
```

Se tudo estiver certo, você verá:

```
Servidor rodando em http://localhost:3000
```

---

## 🔌 Endpoints da API

### ▶️ **GET /tasks**

Retorna a lista de tarefas.

### ➕ **POST /tasks**

Cria uma nova tarefa.

Body esperado:

```json
{
  "title": "Nome da tarefa",
  "description": "Descrição da tarefa"
}
```

### ✏️ **PUT /tasks/:id**

Atualiza uma tarefa existente.

### ❌ **DELETE /tasks/:id**

Remove uma tarefa pelo ID.

---

## 🧠 Como funciona o banco de dados

O `db.json` armazena todas as tarefas em um array:

```json
{
  "tasks": []
}
```

Cada vez que uma tarefa é criada, atualizada ou deletada, o arquivo é lido, modificado e reescrito automaticamente.

---

## 🌐 Conectando com o front-end

Para consumir a API, use `fetch` no seu JavaScript do front-end.

### Listar tarefas:

```js
const response = await fetch("http://localhost:3000/tasks");
const tasks = await response.json();
```

### Criar tarefa:

```js
fetch("http://localhost:3000/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Título", description: "Desc" })
});
```

---

## 🛠 Próximos passos possíveis

* Criar sistema de projetos
* Adicionar autenticação (JWT)
* Migrar o banco para MongoDB ou PostgreSQL
* Criar upload de arquivos
* Criar sistema de usuários
