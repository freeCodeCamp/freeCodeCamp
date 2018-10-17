---
title: ExpressJS
localeTitle: ExpressJS
---
## ExpressJS

Quando se trata de construir aplicações web usando o Node.js, criar um servidor pode levar muito tempo. Ao longo dos anos, o Node.js amadureceu o suficiente devido ao apoio da comunidade. O uso do Node.js como backend para aplicativos e sites da Web ajuda os desenvolvedores a começar a trabalhar em seu aplicativo ou produto rapidamente. Neste tutorial, vamos examinar o Expressjs, que é uma estrutura do Node.js para desenvolvimento da web que vem com recursos como roteamento e renderização e suporte para APIs REST.

## O que é expresso?

O Express é o framework Node.js mais popular porque requer configuração mínima para iniciar um aplicativo ou uma API e é rápido e não publicado ao mesmo tempo. Em outras palavras, ele não impõe sua própria filosofia de que um aplicativo ou API deve ser construído de uma maneira específica, ao contrário do Rails e do Django. Sua flexibilidade pode ser calculada pelo número de módulos `npm` disponíveis, o que o torna conectável ao mesmo tempo. Se você tiver conhecimentos básicos de HTML, CSS e JavaScript e como o Node.js funciona em geral, em pouco tempo você poderá começar a usar o Expressjs.

Express foi desenvolvido por TJ Holowaychuk e agora é mantido pela fundação Node.js e desenvolvedores de código aberto. Para começar a usar o desenvolvimento usando o Express, você precisa ter o Node.js e o npm instalados. Você pode instalar o [Node.js](https://nodejs.org/en/) em sua máquina local e junto com ele vem o utilitário de linha de comando `npm` que nos ajudará a instalar plugins ou como dependências chamadas mais tarde em nosso projeto.

Para verificar se tudo está instalado corretamente, abra seu terminal e digite:

```shell
node --version 
 v5.0.0 
 npm --version 
 3.5.2 
```

Se você está obtendo o número da versão em vez de um erro, significa que você instalou o Node.js e o npm com sucesso.

## Por que usar o Expressjs?

Antes de começarmos com o mecanismo de usar o Express como a estrutura de backend, vamos primeiro explorar por que devemos considerá-lo usando ou as razões de sua popularidade.

*   O Express permite que você crie aplicativos móveis e Web de página única, várias páginas e híbridos. Outro uso comum de back-end é fornecer uma API para um cliente (seja web ou móvel).
*   Ele vem com um mecanismo de modelo padrão, o Jade, que ajuda a facilitar o fluxo de dados em uma estrutura de website e suporta outros mecanismos de modelo.
*   Ele suporta MVC (Model-View-Controller), uma arquitetura muito comum para projetar aplicativos da web.
*   É multi-plataforma e não se limita a qualquer sistema operacional em particular.
*   Ele aproveita o modelo com encadeamento único e assíncrono do Node.js.

Sempre que criamos um projeto usando `npm` , nosso projeto deve ter um arquivo `package.json` .

### Criando package.json

Um arquivo JSON (JavaScript Object Notation) contém todas as informações sobre qualquer projeto do Express. O número de módulos instalados, o nome do projeto, a versão e outras informações meta. Para adicionar Expressjs como um módulo em nosso projeto, primeiro precisamos criar um diretório de projeto e, em seguida, criar um arquivo package.json.

```shell
mkdir express-app-example 
 cd express-app-example 
 npm init --yes 
```

Isso gerará um arquivo `package.json` na raiz do diretório do projeto. Para instalar qualquer módulo do `npm` , precisamos ter o arquivo `package.json` no diretório.

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT" 
 } 
```

### Instalando o Express

Agora temos o arquivo `package.json` , podemos instalar o Express executando o comando:

```shell
npm install --save express 
```

Podemos confirmar que o Express foi instalado corretamente de duas maneiras. Primeiro, haverá uma nova seção no arquivo `package.json` chamado `dependencies` sob o qual nosso Express existe:

```json
{ 
  "name": "express-web-app", 
  "version": "0.1.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "license": "MIT", 
  "dependencies": { 
    "express": "4.16.0" 
  } 
 } 
```

A segunda maneira é que uma nova pasta chamada `node_modules` apareceu de repente na raiz do diretório do nosso projeto. Esta pasta armazena os pacotes que instalamos localmente em nosso projeto.

## Construindo um Servidor com Express

Para usar nosso pacote instalado para o Express Framework e criar um aplicativo de servidor simples, criaremos o arquivo `index.js` na raiz do diretório do nosso projeto.

```javascript
const express = require('express'); 
 const app = express(); 
 
 app.get('/', (req, res) => res.send('Hello World!')); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Para iniciar o servidor, vá até o seu terminal e digite:

```shell
node index.js 
```

Isto irá iniciar o servidor. Este aplicativo mínimo irá escutar na porta 3000. Fazemos um pedido através de nosso navegador em `http://localhost:3000` e nosso servidor responderá com `Hello World` para o qual o navegador é o cliente e a mensagem será mostrada lá.

A primeira linha do nosso código está usando a função `require` para incluir o módulo `express` . É assim que incluímos e usamos um pacote instalado a partir do npm em qualquer arquivo JavaScript em nosso projeto. Antes de começarmos a usar o Express, precisamos definir uma instância dele que manipule a solicitação e a resposta do servidor para o cliente. No nosso caso, é a variável `app` .

`app.get()` é uma função que informa ao servidor o que fazer quando um pedido `get` na rota especificada é chamado. Ele tem uma função de retorno de chamada `(req, res)` que escuta o objeto `req` solicitação recebido e responde de acordo usando o objeto `res` response. Ambos `req` e `res` são disponibilizados para nós pelo framework Express.

O objeto `req` representa a solicitação HTTP e possui propriedades para a cadeia de consulta de solicitação, parâmetros, corpo e cabeçalhos HTTP. O objeto res representa a resposta HTTP que um aplicativo Express envia quando recebe uma solicitação HTTP. No nosso caso, estamos enviando um texto `Hello World` sempre que uma solicitação é feita para a rota `/` .

Por fim, `app.listen()` é a função que inicia uma porta e um host; no nosso caso, o `localhost` para as conexões escutar as solicitações recebidas de um cliente. Podemos definir o número da porta, como `3000` .

## Anatomia de um aplicativo expresso

Uma estrutura típica de um arquivo do servidor Express provavelmente conterá as seguintes partes:

**Dependências**

Importando as dependências, como o próprio express. Essas dependências são instaladas usando `npm` como fizemos no exemplo anterior.

**Instantiations**

Estas são as instruções para criar um objeto. Para usar o express, temos que instanciar a variável do `app` partir dele.

**Configurações**

Estas instruções são as configurações baseadas em aplicativos personalizados que são definidas após as instanciações ou definidas em um arquivo separado (mais sobre isso quando discutir a estrutura do projeto) e necessárias em nosso arquivo do servidor principal.

**Middleware**

Essas funções determinam o fluxo do ciclo de solicitação-resposta. Eles são executados após cada solicitação recebida. Também podemos definir funções de middleware personalizadas. Nós temos uma seção sobre eles abaixo.

**Rotas**

Eles são os terminais definidos em nosso servidor que ajudam a executar operações para uma solicitação específica do cliente.

**Servidor de bootstrapping**

O último que é executado em um servidor expresso é a função `app.listen()` que inicia nosso servidor.

Agora começaremos a discutir as seções sobre as quais não discutimos anteriormente.

## Roteamento

Roteamento refere-se a como um aplicativo do lado do servidor responde a uma solicitação do cliente para um terminal específico. Esse endpoint consiste em um URI (um caminho como `/` ou `/books` ) e um método HTTP, como GET, POST, PUT, DELETE, etc.

As rotas podem ser boas páginas da Web antigas ou terminais da API REST. Em ambos os casos, a sintaxe é sintaxe semelhante para uma rota pode ser definida como:

```javascript
app.METHOD(PATH, HANDLER); 
```

Os roteadores são úteis na separação de interesses, como terminais diferentes, e mantêm partes relevantes do código-fonte juntas. Eles ajudam na construção de código sustentável. Todas as rotas são definidas antes da chamada de função de `app.listen()` . Em um aplicativo típico Express, `app.listen()` será a última função a ser executada.

### Métodos de roteamento

HTTP é um protocolo padrão para um cliente e um servidor para se comunicar. Ele fornece métodos diferentes para um cliente fazer solicitação. Cada rota tem, pelo menos, função hanlder ou um retorno de chamada. Essa função de retorno de chamada determina qual será a resposta do servidor para essa rota específica. Por exemplo, uma rota de `app.get()` é usada para manipular solicitações GET e, em retorno, enviar uma mensagem simples como uma resposta.

```javascript
// GET method route 
 app.get('/', (req, res) => res.send('Hello World!')); 
```

### Caminhos de Roteamento

Um caminho de roteamento é uma combinação de um método de solicitação para definir os endpoints nos quais as solicitações podem ser feitas por um cliente. Os caminhos de rota podem ser strings, padrões de sequência ou expressões regulares.

Vamos definir mais dois pontos de extremidade em nosso aplicativo baseado em servidor.

```javascript
app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 app.get('/about', (req, res) => { 
  res.send('About'); 
 }); 
```

Considere o código acima como um site mínimo que tem dois pontos de extremidade, `/home` e `/about` . Se um cliente fizer uma solicitação para a página inicial, ele só responderá com a `Home Page` e, em `/about` , enviará a resposta: `About Page` . Estamos usando a função `res.send` para enviar a string de volta ao cliente se qualquer uma das duas rotas definidas for selecionada.

### Parâmetros de roteamento

Os parâmetros de rota são segmentos de URL nomeados que são usados ​​para capturar os valores especificados em sua posição na URL. `req.params` objeto `req.params` é usado neste caso porque tem acesso a todos os parâmetros passados ​​na url.

```javascript
app.get('/books/:bookId', (req, res) => { 
  res.send(req.params); 
 }); 
```

O URL de solicitação do cliente no código-fonte acima será `http://localhost:3000/books/23` . O nome dos parâmetros da rota deve ser composto de caracteres (\[A-Za-z0-9\_\]). Um caso de uso muito geral de um parâmetro de roteamento em nossa aplicação é ter a rota 404.

```javascript
// For invalid routes 
 app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.'); 
 }); 
```

Se agora iniciarmos o servidor a partir da linha de comando usando o `node index.js` e tentarmos visitar a URL: `http://localhost:3000/abcd` . Em resposta, obteremos a mensagem 404.

## Funções de Middleware

As funções de middleware são aquelas que têm acesso ao objeto de solicitação ( `req` ), o objeto de resposta ( `res` ) e a `next` função no ciclo de solicitação-resposta do aplicativo. O objetivo dessas funções é modificar objetos de solicitação e resposta para tarefas como analisar corpos de solicitação, incluir cabeçalhos de resposta, fazer outras mudanças no ciclo de solicitação-resposta, encerrar o ciclo de solicitação-resposta e chamar a próxima função de middleware.

A `next` função é uma função no roteador Express que é usada para executar as outras funções de middleware que sucedem o middleware atual. Se uma função de middleware incluir `next()` isso significa que o ciclo de solicitação-resposta foi encerrado lá. O nome da função `next()` aqui é totalmente arbitrário e você pode nomear o que quiser, mas é importante seguir as melhores práticas e tentar seguir algumas convenções, especialmente se estiver trabalhando com outros desenvolvedores.

Além disso, ao escrever um middleware personalizado, não esqueça de adicionar a função `next()` a ele. Se você não mencionar `next()` o ciclo request-response será interrompido no meio do nada, e o servr pode fazer com que o cliente atinja o tempo limite.

Vamos usar criar uma função de middleware personalizada para entender o conceito. Tome este código por exemplo:

```javascript
const express = require('express'); 
 const app = express(); 
 
 // Simple request time logger 
 app.use((req, res, next) => { 
   console.log("A new request received at " + Date.now()); 
 
   // This function call tells that more processing is 
   // required for the current request and is in the next middleware 
   function/route handler. 
   next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Para configurar qualquer middleware, seja um personalizado ou disponível como um módulo npm, usamos a função `app.use()` . É como um caminho de parâmetro opcional e um retorno de chamada de parâmetro obrigatório. No nosso caso, não estamos usando o caminho do parâmetro opcional.

```javascript
app.use((req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
```

A função de middleware acima é chamada para cada solicitação feita pelo cliente. Ao executar o servidor, você notará que, para cada solicitação do navegador no nó de extremidade `/` , você será avisado com uma mensagem em seu terminal:

```shell
A new request received at 1467267512545 
```

As funções de middleware podem ser usadas para uma rota específica. Veja o exemplo abaixo:

```javascript
const express = require('express'); 
 const app = express(); 
 
 //Simple request time logger for a specific route 
 app.use('/home', (req, res, next) => { 
  console.log('A new request received at ' + Date.now()); 
  next(); 
 }); 
 
 app.get('/home', (req, res) => { 
  res.send('Home Page'); 
 }); 
 
 app.get('/about', (req, res) => { 
  res.send('About Page'); 
 }); 
 
 app.listen(3000, () => console.log('Example app listening on port 3000!')); 
```

Desta vez, você verá apenas um prompt semelhante quando o cliente solicitar o terminal `/home` já que a rota é mencionada em `app.use()` . Nada será mostrado no terminal quando o cliente solicitar o endpoint `/about` .

A ordem das funções de middleware é importante, pois elas definem quando chamar qual função de middleware. Em nosso exemplo acima, se definirmos a rota `app.get('/home')...` antes do middleware `app.use('/home')...` , a função de middleware não será invocada.

### Funções de Middleware de Terceiros

As funções de middleware são um padrão útil que permite aos desenvolvedores reutilizar o código dentro de seus aplicativos e até mesmo compartilhá-lo com outras pessoas na forma de módulos NPM. A definição essencial de middleware é uma função com três argumentos: request (ou req), response (res) e next, que observamos na seção anterior.

Muitas vezes, em nosso aplicativo de servidor baseado em Express, estaremos usando funções de middleware de terceiros. Essas funções são fornecidas pelo próprio Express. Eles são como plugins que podem ser instalados usando npm e é por isso que o Express é flexível.

Algumas das funções de middleware mais usadas em uma aplicação do Express são:

#### bodyParser

Ele permite que os desenvolvedores processem dados recebidos, como a carga útil do corpo. A carga útil é apenas os dados que estamos recebendo do cliente para serem processados. Mais útil com os métodos POST. É instalado usando:

```shell
npm install --save body-parser 
```

Uso:

```javascript
const bodyParser = require('body-parser'); 
 
 // To parse URL encoded data 
 app.use(bodyParser.urlencoded({ extended: false })); 
 
 // To parse json data 
 app.use(bodyParser.json()); 
```

É provavelmente uma das funções de middleware de terceiros mais usadas em qualquer aplicação Express.

#### cookieParser

Ele analisa o cabeçalho Cookie e preenche `req.cookies` com um objeto codificado por nomes de cookie. Para instalá-lo,

```shell
$ npm install --save cookie-parser 
```

```javascript
const cookieParser = require('cookie-parser'); 
 app.use(cookieParser()); 
```

#### sessão

Essa função de middleware cria um middleware de sessão com opções dadas. Uma sessão é freqüentemente usada em aplicativos como login / inscrição.

```shell
$ npm install --save session 
```

```javascript
app.use( 
  session({ 
    secret: 'arbitary-string', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true } 
  }) 
 ); 
```

### morgan

O middleware morgan acompanha todas as solicitações e outras informações importantes, dependendo do formato de saída especificado.

```shell
npm install --save morgan 
```

```javascript
const logger = require('morgan'); 
 // ... Configurations 
 app.use(logger('common')); 
```

`common` é um caso de formato predefinido que você pode usar no aplicativo. Existem outros formatos pré-definidos, como tiny e dev, mas você também pode definir seu próprio formato customizado usando os parâmetros de string que estão disponíveis para nós por morgan.

Uma lista das funções de middleware mais usadas está disponível neste [link](https://expressjs.com/en/resources/middleware.html) .

## Servindo arquivos estáticos

Para servir arquivos estáticos, como folhas de estilo CSS, imagens, etc., o Express fornece uma função de middleware integrada `express.static` . Arquivos estáticos são aqueles arquivos que um cliente baixa de um servidor.

É a única função de middleware que vem com o Express framework e podemos usá-lo diretamente em nosso aplicativo. Todos os outros middlewares são de terceiros.

Por padrão, o Express não permite veicular arquivos estáticos. Temos que usar essa função de middleware. Uma prática comum no desenvolvimento de um aplicativo da Web é armazenar todos os arquivos estáticos no diretório 'público' na raiz de um projeto. Podemos servir esta pasta para servir arquivos estáticos incluem escrevendo em nosso arquivo `index.js` :

```javascript
app.use(express.static('public')); 
```

Agora, os arquivos estáticos em nosso diretório público serão carregados.

```shell
http://localhost:3000/css/style.css 
 http://localhost:3000/images/logo.png 
 http://localhost:3000/images/bg.png 
 http://localhost:3000/index.html 
```

### Vários diretórios estáticos

Para usar vários diretórios de ativos estáticos, chame a função de middleware `express.static` várias vezes:

```javascript
app.use(express.static('public')); 
 app.use(express.static('files')); 
```

### Prefixo do caminho virtual

Um prefixo de caminho de correção também pode ser fornecido como o primeiro argumento para a função de middleware `express.static` . Isso é conhecido como um _prefixo de caminho virtual,_ pois o caminho real não existe no projeto.

```javascript
app.use('/static', express.static('public')); 
```

Se agora tentarmos carregar os arquivos:

```shell
http://localhost:3000/static/css/style.css 
 http://localhost:3000/static/images/logo.png 
 http://localhost:3000/static/images/bg.png 
 http://localhost:3000/static/index.html 
```

Essa técnica é útil ao fornecer vários diretórios para servir arquivos estáticos. Os prefixos são usados ​​para ajudar a distinguir entre os vários diretórios.

## Motores de modelo

Mecanismos de modelos são bibliotecas que nos permitem usar diferentes linguagens de modelo. Uma linguagem de modelo é um conjunto especial de instruções (estruturas de sintaxe e controle) que instrui o mecanismo como processar dados. Usar um mecanismo de modelo é fácil com o Express. Os motores de modelos populares, como Pug, EJS, Swig e Handlebars, são compatíveis com o Express. No entanto, o Express vem com um mecanismo de modelo padrão, o Jade, que é a primeira versão lançada do Pug.

Para demonstrar como usar um mecanismo de modelo, usaremos o Pug. É um poderoso mecanismo de template que fornece recursos como filtros, includes, interpolação, etc. Para usá-lo, primeiro temos que instalar como um módulo em nosso projeto usando `npm` .

```shell
npm install --save pug 
```

Este comando irá instalar o pug e para verificar se instalado corretamente, basta dar uma olhada no arquivo `package.json` . Para usá-lo com nosso aplicativo primeiro, temos que defini-lo como o mecanismo de modelo e criar um novo diretório './views' onde armazenaremos todos os arquivos relacionados ao nosso mecanismo de modelo.

```javascript
app.set('view engine', 'pug'); 
 app.set('views', './views'); 
```

Como estamos usando `app.set()` que indica a configuração em nosso arquivo do servidor, devemos colocá-los antes de definirmos qualquer rota ou função de middleware.

Na direcotry `views` , crie um arquivo chamado `index.pug` .

```pug
doctype html 
  html 
    head 
      tite="Hello from Pug" 
    body 
      p.greetings Hello World! 
```

Para executar esta página, adicionaremos a seguinte rota ao nosso aplicativo.

```javascript
app.get('/hello', (req, res) => { 
  res.render('index'); 
 }); 
```

Como já definimos o Pug como nosso mecanismo de modelo, no `res.render` não precisamos fornecer a extensão `.pug` . Essa função renderiza o código em qualquer arquivo `.pug` para HTML para o cliente exibir. Os navegadores só podem renderizar arquivos HTML. Se você iniciar o servidor agora e visitar a rota `http://localhost:3000/hello` você verá a saída `Hello World` renderizada corretamente.

Em Pug, você deve notar que não precisamos escrever tags de fechamento nos elementos, como fazemos em HTML. O código acima será renderizado em HTML como:

```html

<!DOCTYPE html> 
 <html> 
   <head> 
      <title>Hello from Pug</title> 
   </head> 
 
   <body> 
      <p class = "greetings">Hello World!</p> 
   </body> 
 </html> 
```

A vantagem de usar um mecanismo de modelo em arquivos HTML brutos é que eles fornecem suporte para executar tarefas em dados. HTML não pode renderizar dados diretamente. Frameworks como Angular e React compartilham esse comportamento com mecanismos de modelo.

Você também pode passar valores para o mecanismo de modelo diretamente da função de manipulador de rota.

```javascript
app.get('/', (req, res) => { 
  res.render('index', { title: 'Hello from Pug', message: 'Hello World!' }); 
 }); 
```

Para o caso acima, nosso arquivo `index.pug` será escrito como:

```pug
doctype html 
  html 
    head 
      title= title 
    body 
      h1= message 
```

A saída será a mesma do caso anterior.

## Estrutura do projeto de um aplicativo expresso

Como o Express não impõe muito ao desenvolvedor que o utiliza, às vezes pode ser um pouco avassalador para qual estrutura de projeto se deve seguir. Ele não tem uma estrutura definida oficialmente, mas o caso de uso mais comum que qualquer aplicativo baseado em Node.js segue é separar tarefas diferentes em módulos diferentes. Isso significa ter arquivos JavaScript separados.

Vamos percorrer uma estrutura típica de um aplicativo da web baseado no Express.
```
project-root/ 
   node_modules/          // This is where the packages installed are stored 
   config/ 
      db.js                // Database connection and configuration 
      credentials.js       // Passwords/API keys for external services used by your app 
      config.js            // Environment variables 
   models/                 // For mongoose schemas 
      books.js 
      things.js 
   routes/                 // All routes for different entities in different files 
      books.js 
      things.js 
   views/ 
      index.pug 
      404.pug 
        ... 
   public/                 // All static files 
      images/ 
      css/ 
      javascript/ 
   app.js 
   routes.js               // Require all routes in this and then require this file in 
   app.js 
   package.json 
```

Esse padrão é comumente conhecido como MVC, model-view-controller. Simplesmente porque nosso modelo de banco de dados, a interface do usuário do aplicativo e os controladores (no nosso caso, rotas) são gravados e armazenados em arquivos separados. Este padrão de design que torna qualquer aplicativo da Web fácil de escalar se você quiser introduzir mais rotas ou arquivos estáticos no futuro e o código puder ser mantido.