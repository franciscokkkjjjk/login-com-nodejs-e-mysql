# login-com-nodejs-e-mysql
A API de login é uma aplicação construída com Node.js para autenticar usuários e permitir que eles acessem áreas restritas de um site ou aplicação. A API utiliza o JSON Web Token (JWT) para autenticação, o que permite que os usuários permaneçam logados mesmo após fechar o navegador.

## Endpoints

A API oferece os seguintes endpoints:

***POST /usuario/cadastrar***: Este endpoint permite que os usuários criem uma nova conta fornecendo um nome de usuário e uma senha. A senha é criptografada antes de ser armazenada no banco de dados.

***POST /login***: Este endpoint permite que os usuários façam login com suas credenciais existentes (nome de usuário e senha). Se as credenciais estiverem corretas, a API retornará um token JWT que pode ser usado para autenticar solicitações subsequentes.

***GET /usuarios***: Este endpoint permite que os usuários obtenham uma lista com todos os usuários do banco de dados após verificar o token JWT. O endpoint retorna um JSON contendo o ID do usuário e o nome de usuário.

***GET /ping***: Este endpoint retorna um JSON com o campo "pong" definido como "true". Este endpoint pode ser usado para testar a conexão com a API.

A API é projetada para ser segura e confiável, seguindo as melhores práticas de segurança, como o uso de uma chave secreta forte para assinar os tokens JWT.

## Instalação
Clonando esse projeto em um diretório qualquer do computador:

``git clone https://github.com/franciscokkkjjjk/login-com-nodejs-e-mysql``

Após clonar e abrir o diretório que o projeto foi clonado, deve rodar o comando para instalar as dependências:

``npm install``

Com seu editor favorito ou um editor qualquer, é preciso criar o arquivo ***.env*** para podermos criar nossas variáveis de ambiente que são:

``PORT_SERVER =`` - porta onde onde o servidor irá rodar. Caso nenhuma porta seja indicada vai rodar na 4000

``SECRET_KEY_JTW=`` - Chave secreta do JsonWebToken

``MYSQL_DATABASE=`` - Nome do Banco de dados que a tabela users se encontra.

``MYSQL_USER=`` - Usuário de acesso ao banco de dados

``MYSQL_PASSWORD=`` - Senha do usuário de acesso ao banco de dados
 
``MYSQL_PORT=`` - Porta onde o MySQL está rodando

Pronto! Agora tudo está instalado, basta inicializar o servidor com:

``npm start`` 

ou 

``npm run start``

