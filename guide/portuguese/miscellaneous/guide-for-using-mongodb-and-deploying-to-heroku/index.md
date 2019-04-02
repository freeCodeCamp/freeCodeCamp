---
title: Guide for Using MongoDB and Deploying to Heroku
localeTitle: Guia para usar o MongoDB e implantar no Heroku
---
Neste guia, vamos ver como trabalhar com o MongoDB localmente e com o `mLab` para implementá-lo no Heroku. Alternativamente, você também pode usar o add-on `mLab` em Heroku, É grátis, mas pode exigir detalhes do seu cartão de crédito. Então, se você não está interessado em fornecer seus dados de cartão de crédito, você pode ir com o site da [mLab](https://mlab.com) .

## Configurando uma conta gratuita no Heroku e no `mLab` :

Inscreva-se para [Heroku](https://signup.heroku.com/) e [mLab](https://mlab.com/signup/)

## Iniciando seu Mongodb (localmente):

Para iniciar seu banco de dados em seu próprio sistema, execute o seguinte comando:
```
# Create a directory named 'data' if it doesn't exist 
 $ mongod --port 27017 --dbpath=./data 
```

Agora seu Db está rodando

`mongodb://localhost:27017/my_database_name`

Se você estiver usando c9 e Se você estiver com problemas para iniciar seu banco de dados em C9, consulte esta [página](https://community.c9.io/t/setting-up-mongodb/1717)

## Iniciando seu Mongodb ( `mLab` ):

1.  Depois de criar sua conta `mLab` , clique no botão **Criar novo** e selecione Single-node -> Sandbox para obter o banco de dados livre e dar um nome ao seu banco de dados (criei um banco de dados chamado 'food' como exemplo).
2.  Agora um banco de dados é criado com o nome 'comida', você pode criar uma nova coleção de sua preferência.
3.  Por fim, adicione um usuário / usuários que possam acessar esse banco de dados e, ao adicionar um usuário, ele solicitará o nome de usuário e a senha que serão usados ​​para acessar o banco de dados.

Agora seu banco de dados está rodando no url algo assim -

`mongodb://username:password@ds01316.mlab.com:1316/food`

onde nome de usuário e senha são os detalhes que você deu quando adicionou um usuário.

Você pode encontrar sua URL do [_banco de dados_](https://mlab.com/databases/your_database_name) em [https://mlab.com/databases/your _database_ name](https://mlab.com/databases/your_database_name)

## Fazendo uma conexão com o MongoDB em Node.js (enquanto o banco de dados está sendo executado em seu sistema local):

Para trabalhar com o banco de dados, primeiro você precisa criar uma conexão. Nesta seção, usaremos o driver Node.js nativo do MongoDB para criar a conexão com o servidor MongoDB. Para instalar os drivers nativos do mongodb, use o comando npm para instalar o módulo mongodb. Depois disso, execute o seguinte comando no diretório do seu projeto.

`npm install mongodb`

Código Básico para se conectar ao MongoDB
```
//lets require/import the mongodb native drivers. 
 var mongodb = require('mongodb'); 
 
 //We need to work with "MongoClient" interface in order to connect to a mongodb server. 
 var MongoClient = mongodb.MongoClient; 
 
 // Connection URL. This is where your mongodb server is running. 
 
 //(Focus on This Variable) 
 var url = 'mongodb://localhost:27017/my_database_name'; 
 //(Focus on This Variable) 
 
 // Use connect method to connect to the Server 
  MongoClient.connect(url, function (err, db) { 
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err); 
  } else { 
    console.log('Connection established to', url); 
 
    // do some work here with the database. 
 
    //Close connection 
    db.close(); 
  } 
 }); 
```

Para mais exemplos para trabalhar com o MongoDB, você pode se referir a este [blog](http://blog.modulus.io/mongodb-tutorial)

Precisamos saber onde nosso servidor mongodb está rodando. A url representa o local onde a instância do servidor mongodb está sendo executada, de forma que possamos nos conectar a ela. A url contém o nome do banco de dados ao qual pretendemos nos conectar.

Supondo que seu banco de dados esteja sendo executado na URL mencionada acima, vamos nos concentrar agora no URL que conecta o banco de dados (local)

`var url = 'mongodb://localhost:27017/my_database_name';`

### Fazendo uma conexão com o MongoDB no Node.js (enquanto o banco de dados está sendo executado no seu `mLab` ):

A URL para se conectar ao `mLab` DB se parece com isso

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

Você pode substituir a variável url por isso e tudo estará funcionando exatamente como deveria e, finalmente, seu banco de dados estará seguro e protegido no `mLab` onde você poderá ver suas coleções, usuários, backups, etc.

### Nota importante:

Mas comprometer seu nome de usuário e senha em seu repositório público às vezes é muito perigoso, portanto, nunca os envie para repositórios públicos. Em vez disso, você pode usar variáveis ​​de ambiente para armazenar o URL (contendo nome de usuário e senha) para fazer isso em seu sistema **local** .

Para usuários de Mac / Linux, você pode simplesmente digitar:

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

Para usuários do Windows:

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

Depois de definir as variáveis ​​de ambiente, você precisa chamar a variável de ambiente em seu código. Você pode fazer isso digitando isto

`var url = process.env.MONGOLAB_URI;`

Agora, sua URL do MongoDb é inserida em seu código com segurança. Agora você pode cometer e implantar no seu heroku.

Se você precisar de mais ajuda sobre como implantar em Heroku, você pode se referir a este [Wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide)

## Etapas Finais:

Depois de implantar seu código no seu aplicativo Heroku, você precisa definir a variável de ambiente para o código em heroku.

Para fazer isso, você precisa executar o seguinte comando do seu controle remoto heroku,

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

É isso, seu aplicativo agora está implantado com sucesso no heroku com o `mLab` DB