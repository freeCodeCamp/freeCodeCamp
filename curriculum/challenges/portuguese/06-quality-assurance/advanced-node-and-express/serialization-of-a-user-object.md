---
id: 5895f70cf9fc0f352b528e66
title: Serializar um objeto de usuário
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialização e desserialização são conceitos importantes no que diz respeito à autenticação. Serializar um objeto significa converter seu conteúdo em uma pequena *chave* que pode ser desserializada no objeto original. Isto é o que nos permite saber quem se comunicou com o servidor sem ter que enviar os dados de autenticação, como o nome de usuário e a senha, em cada solicitação de uma nova página.

Para configurar isso corretamente, você precisa ter uma função de serialização e uma função de desserialização. No Passaport, elas podem ser criadas com:

```javascript
passport.serializeUser(cb);
passport.deserializeUser(cb);
```

A função de callback passada para `serializeUser` é chamada com 2 argumentos, o objeto de usuário completo e uma função de callback usada pelo passport.

A função de callback espera dois argumentos: um erro, se houver, e uma chave única para identificar o usuário que deve ser retornado na função. Você usará o `_id` do usuário no objeto. Ele com certeza será único, já que é gerado pelo MongoDB.

Do mesmo modo, `deserializeUser` é chamada com dois argumentos: a chave única e uma função de callback.

Essa função de callback espera dois argumentos: um erro, se houver, e o objeto do usuário completo. Para obter o objeto de usuário completo, faça uma consulta por um `_id` do Mongo, como mostrado abaixo:


```javascript
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

Adicione as duas funções acima ao seu servidor. A classe `ObjectID` vem do pacote `mongodb`. `mongodb@~3.6.0` já foi adicionado como uma dependência. Declare essa classe com:

```javascript
const { ObjectID } = require('mongodb');
```

A função `deserializeUser` lançará um erro até que você configure a conexão com o banco de dados. Então, por agora, comente a chamada de `myDatabase.findOne` e apenas chame `done(null, null)` na função de callback de `deserializeUser`.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#serialization-of-a-user-object-4" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

Você deve serializar o objeto do usuário corretamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.serializeUser/gi,
    'You should have created your passport.serializeUser function'
  );
  assert.match(
    data,
    /null,\s*user._id/gi,
    'There should be a callback in your serializeUser with (null, user._id)'
  );
}
```

Você deve desserializar o objeto do usuário corretamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport.deserializeUser/gi,
    'You should have created your passport.deserializeUser function'
  );
  assert.match(
    data,
    /null,\s*null/gi,
    'There should be a callback in your deserializeUser with (null, null) for now'
  );
}
```

O MongoDB deve ser uma dependência.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'mongodb',
    'Your project should list "mongodb" as a dependency'
  );
}
```

O MongoDB deve ser solicitado adequadamente, incluindo o ObjectId.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')mongodb\1/gi,
    'You should have required mongodb'
  );
  assert.match(
    data,
    /new ObjectID.*id/gi,
    'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'
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
