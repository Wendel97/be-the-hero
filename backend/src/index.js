/* 

* npm init -y              -- cria o arquivo package.json
* npm install express      -- Baixar modo express  /cria o arquivo package-lock.json
* npm install nodemon - D  -- Instala o pacote nodemon  /criar script 'start' para reniciar servidor toda vez |
                                                        |que houver alteração no code

* Rota / Recurso

* Métodos HTTP:
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end

* Tipos de parâmetros:
* Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

* Banco de Dados /---------/
* npm install knex    --  instala Knex para utilização do banco de dados no node
* npm install sqlite3 --  instala SQlite
* npx knex init       --  cmd npx executa um pacote

*/

const express = require('express');    // Importando express
const routes = require('./routes')     // Importando o arquivo de rotas './routes'
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Converte um arquivo json passado no request body

app.use(routes);  // Utilizando o modulo rotas do express pela variavel routes

app.listen(3333); // Criando um seridor para utilizar a porta 3333 do computador