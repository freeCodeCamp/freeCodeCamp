---
id: 589fc830f9fc0f352b528e74
title: Configurar o ambiente
challengeType: 2
forumTopicId: 301566
dashedName: set-up-the-environment
---

# --description--

Os desafios a seguir farão uso do arquivo `chat.pug`. Assim, em seu arquivo `routes.js`, adicione uma rota de GET apontando para `/chat`, que faz uso de `ensureAuthenticated` e renderiza `chat.pug`, com `{ user: req.user }` passado como argumento para a resposta. Agora, altere a rota `/auth/github/callback` existente para definir `req.session.user_id = req.user.id`e redirecione para `/chat`.

Adicione `socket.io@~2.3.0` como uma dependência e solicite/instancie-o no servidor definido como `http` (que vem integrado ao Node.js), conforme segue:

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);
```

Agora que o servidor *http* está montado na aplicação do *Express*, você precisa escutar o servidor *http*. Altere a linha com `app.listen` para `http.listen`.

A primeira coisa que precisa ser tratada é escutar uma nova conexão do client. A palavra-chave <dfn>on</dfn> faz isso - escuta um evento específico. Ela requer 2 argumentos: uma string contendo o título do evento que é emitido e uma função com a qual os dados são passados. No caso do nosso listener de conexão, usamos o *socket* para definir os dados no segundo argumento. Um socket é um client individual que está conectado.

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

O comentário suprime o erro que você normalmente veria, já que 'io' não está definido no arquivo. Já adicionamos um CDN confiável à biblioteca socket.io na página em chat.pug.

Agora, tente carregar o aplicativo e autentique-se. Você deve ver no console do servidor a frase 'A user has connected'!

**Observação:** `io()` só funciona ao se conectar a um socket hospedado no mesmo url/servidor. Para se conectar a um socket externo hospedado em outro lugar, você usaria `io.connect('URL');`.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://gist.github.com/camperbot/aae41cf59debc1a4755c9a00ee3859d1" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

`socket.io` deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'socket.io',
        'Your project should list "socket.io" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Você deve solicitar e instanciar corretamente `http` como `http`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /http.*=.*require.*('|")http\1/gi,
        'Your project should list "http" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Você deve solicitar e instanciar corretamente `socket.io` como `io`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.*=.*require.*('|")socket.io\1.*http/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Socket.IO deve estar escutando as conexões.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io.on.*('|")connection\1.*socket/gi,
        'io should listen for "connection" and socket should be the 2nd arguments variable'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O client deve se conectar ao servidor.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/public/client.js').then(
    (data) => {
      assert.match(
        data,
        /socket.*=.*io/gi,
        'Your client should be connection to server with the connection defined as socket'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
