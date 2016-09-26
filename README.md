# Seredempia

##API Rest da Aplicação Seredempia (Server)

Esta aplicação tem como objetivo, ao receber solicitações da parte Cliente enviar ou alterar informações de acordo com o que for solicitado e assim possibilitar a automatização do processo de compra de passagens com desconto para estudantes. Para o desenvolvimento desta aplicação está sendo utilizada a linguagem de programação Javascript e as ferramentas:

    • Node.js 4.5.0;

    • MongoDB 3.2.9 para Windows x64;

    • NPM 2.15.9;

    • Express 4.14.0;

    • Body-Parser 1.15.2;

    • Mongoose 4.6.1;

    • MongoDB 3.2.9 para Windows x64;

    • Atom 1.12.0.

No desenvolvimento desta aplicação foi criado um arquivo "server.js" que importa os módulos do node e arquivos necessários a aplicação, se conecta com o banco de dados (MongDB), cria o server (usando Express) e o coloca no ar. Além deste arquivo, esta aplicação também possui:

  •	Controllers: Criam as possíveis rotas a serem utilizadas dentro da api, dentre os controllers estão:

    •	StudentController – cria as rotas relacionadas aos estudantes, como: GET's, pega estudantes específicos
    dentro do banco (Todos, por Escola, Status ou CPF); POST, adiciona um novo estudante; PUT, altera informações
    dos estudantes; DELETE, apaga um estudante;

    •	SchoolController – cria as rotas relacionadas às escolas, como: GET's, pega escolas especificas dentro
    do banco (Todas ou LOG-IN); POST, adiciona uma nova escola; PUT, altera informações das escolas; DELETE,
    apaga uma escola;

    •	TransportController – cria as rotas relacionadas aos transportes, como: GET's, pega transportes
    específicos dentro do banco (Todos ou LOG-IN); POST, adiciona um novo transporte; PUT, altera informações
    dos transporte; DELETE, apaga um transporte.

  •	Models: Utilizando o mongoose é possível criar padrões (esquemas) para objetos a serem adicionados dentro do MongoDB, criando assim os models:

    •	Student – possui CPF, nome, as informações de sua escola (CNPJ e Nome) e seu status, que contém sua
    situação (podendo ser: "N": Não Confirmado, "W": Esperando, "C": Confirmado, "B": Bloqueado) e
    o mês desta solicitação (Caso não seja o mês atual deve ser atualizado e a situação se tornar "N");

    •	School – possui seu CNPJ, nome (Razão Social) e uma senha para efetuar LOG-IN junto ao CNPJ;

    •	Transport – possui seu CNPJ, nome (Razão Social) e uma senha para efetuar LOG-IN junto ao CNPJ.
