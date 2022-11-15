---
id: 589fc830f9fc0f352b528e74
title: Configurar o ambiente
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Os desafios a seguir farão uso do arquivo `chat.pug`. Assim, em seu arquivo `routes.js`, adicione uma rota de GET apontando para `/chat`, que faz uso de `ensureAuthenticated` e renderiza `chat.pug`, com `{ user: req.user }` passado como argumento para a resposta. Agora, altere a rota `/auth/github/callback` existente para definir `req.session.user_id = req.user.id`e redirecione para `/chat`.

`socket.io@~2.3.0` já foi adicionado como uma dependência, então solicite/instancie-o no servidor com `http` (que vem integrado ao Node.js), conforme segue:

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Agora que o servidor *http* está montado na aplicação do *Express*, você precisa escutar o servidor *http*. Altere a linha com `app.listen` para `http.listen`.

A primeira coisa que precisa ser tratada é escutar uma nova conexão do client. A palavra-chave <dfn>on</dfn> faz isso - escuta um evento específico. Ela requer 2 argumentos: uma string contendo o título do evento que é emitido e uma função pela qual os dados são passados. No caso do nosso listener de conexão, use o `socket` para definir os dados no segundo argumento. Um socket é um client individual que está conectado.

Para escutar as conexões do servidor, adicione o seguinte na sua conexão do banco de dados:

```javascript
io.on('connection', socket => {
  console.log('A user has connected');
});
```

Agora, para o client se conectar, basta adicionar o seguinte ao `client.js` que é carregado pela página após a autenticação:

```js
/*global io*/
let socket = io();
```

O comentário suprime o erro que você normalmente veria, já que 'io' não está definido no arquivo. Você já adicionou um CDN confiável à biblioteca socket.io na página em `chat.pug`.

Agora, tente carregar o aplicativo e autentique-se. Você deve ver no console do servidor a frase `A user has connected`.

**Observação:** `io()` só funciona ao se conectar a um socket hospedado no mesmo url/servidor. Para se conectar a um socket externo hospedado em outro lugar, você usaria `io.connect('URL');`.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-the-environment-6" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

`socket.io` deve ser uma dependência.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'socket.io',
    'Your project should list "socket.io" as a dependency'
  );
}
```

Você deve solicitar e instanciar corretamente `http` como `http`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /http.*=.*require.*('|")http\1/s,
    'Your project should list "http" as a dependency'
  );
}
```

Você deve solicitar e instanciar corretamente `socket.io` como `io`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.*=.*require.*('|")socket.io\1.*http/s,
    'You should correctly require and instantiate socket.io as io.'
  );
}
```

Socket.IO deve estar escutando as conexões.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /io.on.*('|")connection\1.*socket/s,
    'io should listen for "connection" and socket should be the 2nd arguments variable'
  );
}
```

O client deve se conectar ao servidor.

```js
async (getUserInput) => {
  const url = new URL("/public/client.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /socket.*=.*io/s,
    'Your client should be connection to server with the connection defined as socket'
  );
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
