---
id: 589fc831f9fc0f352b528e77
title: Autenticação com Socket.IO
challengeType: 2
forumTopicId: 301548
dashedName: authentication-with-socket-io
---

# --description--

Atualmente, você não pode determinar quem está conectado ao socket da web. Embora `req.user` contenha o objeto do usuário,isso só ocorre quando o usuário interage com o servidor web. Com sockets da web, você não tem `req` (solicitação) e, portanto, não tem dados do usuário. Uma maneira de resolver o problema de saber quem está conectando ao socket da web é analisar e decodificar o cookie que contém a sessão do Passport e desserializá-lo para obter o objeto do usuário. Por sorte, existe um pacote no NPM só para este efeito, que transforma uma tarefa que antes era complexa em algo simples!

Adicione `passport.socketio@~3.7.0`, `connect-mongo@~3.2.0` e `cookie-parser@~1.4.5` como dependências e solicite-as como `passportSocketIo`, `MongoStore` e `cookieParser`, respectivamente. Além disso, precisamos inicializar uma nova store de memória, a partir do `express-session` que solicitamos anteriormente. Deve ficar assim:

```js
const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

Agora, só precisamos dizer ao Socket.IO para usá-la e definir as opções. Certifique-se de que ela foi adicionada antes do código do socket existente e não no listener das conexões existentes. Para o servidor, ele deve ficar assim:

```js
io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: 'express.sid',
    secret: process.env.SESSION_SECRET,
    store: store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
  })
);
```

Certifique-se de adicionar a `key` e a `store` no middleware `session` montado na aplicação. Isto é necessário para informar ao *SocketIO* a qual sessão ele deve se relacionar.

<hr />

Agora, defina as funções de `success` e `fail` na função de callback:

```js
function onAuthorizeSuccess(data, accept) {
  console.log('successful connection to socket.io');

  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  if (error) throw new Error(message);
  console.log('failed connection to socket.io:', message);
  accept(null, false);
}
```

Agora, o objeto de usuário está acessível no seu objeto de socket como `socket.request.user`. Por exemplo, agora, você pode adicionar o seguinte:

```js
console.log('user ' + socket.request.user.name + ' connected');
```

Ele vai logar no console do servidor que está conectado!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto até este momento [aqui](https://gist.github.com/camperbot/1414cc9433044e306dd7fd0caa1c6254).

# --hints--

`passport.socketio` deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport.socketio',
        'Your project should list "passport.socketio" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

`cookie-parser` deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'cookie-parser',
        'Your project should list "cookie-parser" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O passportSocketIo deve ser solicitado adequadamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require\((['"])passport\.socketio\1\)/gi,
        'You should correctly require and instantiate "passport.socketio"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O passportSocketIo deve ser configurado adequadamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /io\.use\(\s*\w+\.authorize\(/,
        'You should register "passport.socketio" as socket.io middleware and provide it correct options'
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
