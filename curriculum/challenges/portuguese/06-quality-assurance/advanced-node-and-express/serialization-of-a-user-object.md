---
id: 5895f70cf9fc0f352b528e66
title: Serializar um objeto de usuário
challengeType: 2
forumTopicId: 301563
dashedName: serialization-of-a-user-object
---

# --description--

Serialização e desserialização são conceitos importantes no que diz respeito à autenticação. Serializar um objeto significa converter seu conteúdo em uma pequena *chave* que pode ser desserializada no objeto original. Isto é o que nos permite saber quem se comunicou com o servidor sem ter que enviar os dados de autenticação, como o nome de usuário e a senha, em cada solicitação de uma nova página.

Para configurar isso corretamente, precisamos ter uma função de serialização e uma função de desserialização. No Passport, criamos estas funções com `passport.serializeUser( OURFUNCTION )` e `passport.deserializeUser( OURFUNCTION )`

`serializeUser` é chamada com 2 argumentos, o objeto de usuário completo e uma função de callback usada pelo passport. Uma chave única para identificar que o usuário deve ser retornado na função de callback. A mais fácil de usar é o `_id` do usuário no objeto. Ele deve ser único, já que é gerado pelo MongoDB. Da mesma forma, `deserializeUser` também é chamada com essa chave e uma função de callback para o passport. Desta vez, porém, temos de pegar essa chave e devolver o objeto do usuário completo à função de callback. Para fazer uma pesquisa de consulta para um `_id` do Mongo, você precisará criar `const ObjectID = require('mongodb').ObjectID;`. Então, para usá-la, você chama `new ObjectID(THE_ID)`. Certifique-se de adicionar `mongodb@~3.6.0` como uma dependência. Você pode ver isso nos exemplos abaixo:

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  });
});
```

OBSERVAÇÃO: `deserializeUser` vai lançar um erro até que tenhamos definido o banco de dados na próxima etapa. Portanto, por enquanto, comente todo o bloco e apenas chame `done(null, null)` na função `deserializeUser`.

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento em <a href="https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/7068a0d09e61ec7424572b366751f048</a>.

# --hints--

Você deve serializar a função do usuário corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Você deve desserializar a função do usuário corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O MongoDB deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'mongodb',
        'Your project should list "mongodb" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

O MongoDB deve ser solicitado adequadamente, incluindo o ObjectId.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
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
