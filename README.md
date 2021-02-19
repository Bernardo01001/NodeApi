# ApiNode
Uma web api construida com NodeJS com o curso da rocketseat

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a API

```bash
# Clone este repositório
$ git clone <https://github.com/Bernardo01001/ApiNode-Rocketsest.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd ApiNode-Rocketsest

# Instale as dependências
$ npm install

# Crie uma imagem do docker com do banco mongoDB
$ docker pull mongo

# Coloque o mongo na porta 27017
docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no mongodb

# Rodar o banco
docker ps -a

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>
```
# NodeApi
