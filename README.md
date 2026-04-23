# 🚀 API - Registro de Clientes

API desenvolvida em Node.js para gerenciamento de clientes, permitindo operações completas de CRUD com persistência em MongoDB.

## 📌 Funcionalidades

* Criar cliente
* Listar todos os clientes
* Buscar cliente por ID
* Atualizar cliente
* Excluir cliente

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv
* cors

## 📂 Estrutura do projeto

```
backend/
│
├── controllers/
├── models/
├── routes/
├── server.js
├── package.json
└── .gitignore
```

## ⚙️ Configuração do ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/AndersonBem/atv-coding-fullstack-backend.git
cd atv-coding-fullstack-backend
```

### 2. Instalar dependências

```bash
npm i
```

### 3. Criar arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Rodar o servidor

```bash
npm start
```

ou (se tiver nodemon):

```bash
npm run dev
```

---

## 🌐 Rotas da API

### ➕ Criar cliente

```
POST /api
```

Body:

```json
{
  "nome": "João",
  "telefone": "(81) 99999-9999",
  "email": "joao@email.com"
}
```

---

### 📋 Listar clientes

```
GET /api
```

---

### 🔍 Buscar cliente por ID

```
GET /api/:id
```

---

### ✏️ Atualizar cliente

```
PUT /api/:id
```

---

### ❌ Excluir cliente

```
DELETE /api/:id
```

---

## ⚠️ Validações

* Telefone válido (formato brasileiro)
* E-mail válido
* E-mail único

---

## 🚀 Deploy

API publicada em:

👉 https://desafio-app-clientes.onrender.com

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos.
