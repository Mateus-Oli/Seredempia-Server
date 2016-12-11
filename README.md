# Seredempia

## API Rest da Aplicação Seredempia (Server)

Esta aplicação tem como objetivo, ao receber solicitações da parte Cliente enviar ou alterar informações de acordo com o que for solicitado e assim possibilitar a automatização do processo de compra de passagens com desconto para estudantes. Para o desenvolvimento desta aplicação está sendo utilizada a linguagem de programação Javascript.

## Ferramentas

* [Node.js 4.5.0](https://nodejs.org/en/);

* [MongoDB 3.2.9](https://www.mongodb.com/);

* [NPM 2.15.9](https://www.npmjs.com/);

* [Express 4.14.0](http://expressjs.com/);

* [Body-Parser 1.15.2](https://github.com/expressjs/body-parser);

* [Mongoose 4.6.1](http://mongoosejs.com/);

* [Atom 1.12.0](https://atom.io/).

## Estrutura

No desenvolvimento desta aplicação foi criado um arquivo `server.js"` que importa os módulos do node e arquivos necessários a aplicação, se conecta com o banco de dados (MongDB), cria o server (usando Express) e o coloca no ar. Além deste arquivo, esta aplicação também possui:

* `Controllers`: Criam as possíveis rotas a serem utilizadas dentro da api, dentre os controllers estão:

  *	`StudentController` – cria as rotas relacionadas aos estudantes, como: GET's, pega estudantes específicos dentro do banco (Todos, por Escola, Status ou CPF); POST, adiciona um novo estudante; PUT, altera informações dos estudantes; DELETE, apaga um estudante;

  *	`SchoolController` – cria as rotas relacionadas às escolas, como: GET's, pega escolas especificas dentro do banco (Todas ou LOG-IN); POST, diciona uma nova escola; PUT, altera informações das escolas; DELETE, apaga uma escola;

  *	`TransportController` – cria as rotas relacionadas aos transportes, como: GET's, pega transportes específicos dentro do banco (Todos ou LOG-IN); POST, adiciona um novo transporte; PUT, altera informações dos transporte; DELETE, apaga um transporte.

* `Models`: Utilizando o mongoose é possível criar padrões (esquemas) para objetos a serem adicionados dentro do MongoDB, criando assim os models:

  * `Student` – possui CPF, nome, frequenta uma instituição de ensino, e um status, que contém sua situação (podendo ser: "N": Não Confirmado, "W": Esperando, "C": Confirmado, "B": Bloqueado) e o mês desta solicitação (Caso não seja o mês atual deve ser atualizado e a situação se tornar "N");

  * `School` – possui seu CNPJ, nome (Razão Social) e uma senha para efetuar LOG-IN junto ao CNPJ;

  * `Transport` – possui seu CNPJ, nome (Razão Social) e uma senha para efetuar LOG-IN junto ao CNPJ.

## Instalação

### Pré-Instalação

Ferramentas necessarias para o funcionamento do projeto. Para instalar o Node.js é necessario entrar em seu site e fazer fazer o download do arquivo:

  * [Node.js](https://nodejs.org/en/);

### Instalações de dependencias

Dependencias utilizadas pelo projeto. o comando a seguir instala as dependencias descritas dentro do arquivo `package.json`:

* `npm install`;

## Ativação

Para inicializar o projeto basta entrar na pasta do projeto a partir do console do sistema operacional e digitar o seguinte comando:

```bash
npm start
```

## Endpoints

Esta API cria endpoints que suprirão informações para a aplicação cliente apartir de um endereço URL e um método HTTP. dentre estes endpoints estão:

### Endpoints de Estudantes

* `/student`:
  * GET: Recupera informações dos estudantes;
  * POST: Cria um novo estudante;
  * PUT: Atualiza a informação dos estudantes;


* `/studentsSt/:status`:
  * GET:  Recupera estudantes a partir de seus status;


* `/studentsSc/:school`:
  * GET: Recupera estudantes a partir de suas escolas;


* `/studentsCp/:cpf`:
  * GET: Recupera um estudante apartir de seu CPF.

### Endpoints de Escolas

* `/schools`:
  * GET: Recupera informações da escola;
  * POST: Cria uma nova escola;
  * PUT: Atualiza a informação das escolas;


* `/schoolsCnPa/:cnpj/:password`:
  * GET: Recupera informações de login do usuario;

### Endpoints de Transportess

* `/transport`:
  * GET: Recupera informações do transporte;
  * POST: Cria um novo transporte;
  * PUT: Atualiza a informação dos transporte;


* `/transportCnPa/:cnpj/:password`:
  * GET: Recupera informações de login do usuario;
