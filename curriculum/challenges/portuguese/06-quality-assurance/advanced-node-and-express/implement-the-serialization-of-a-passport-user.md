---
id: 5895f70cf9fc0f352b528e67
title: Implementar a serialização de um usuário do Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

No momento, não estamos carregando um objeto de usuário real, já que não configuramos nosso banco de dados. Isto pode ser feito de muitas maneiras diferentes. Para o nosso projeto, no entanto, conectaremos ao banco de dados quando iniciarmos o servidor e manteremos uma conexão persistente para todo o ciclo de vida da aplicação. Para fazer isso, adicione a string de conexão do banco de dados (por exemplo: `mongodb+srv://:@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) à variável de ambiente `MONGO_URI`. Este é usado no arquivo `connection.js`.

*Se você estiver com problemas na criação de um banco de dados gratuito no MongoDB Atlas, confira o [tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/).*

Agora, queremos conectar ao nosso banco de dados. Em seguida, vamos começar a escutar pedidos. O objetivo é não permitir solicitações antes de nosso banco de dados estar conectado ou se houver um erro no banco de dados. Para fazer isso, você vai querer englobar a serialização e as rotas da aplicação no código a seguir:

```js
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    //Change the response to render the Pug template
    res.render('pug', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('pug', { title: e, message: 'Unable to login' });
  });
});
// app.listen out here...
```

Certifique-se de descomentar o código `myDataBase` em `deserializeUser` e de editar o seu `done(null, null)` para incluir o `doc`.

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/175f2f585a2d8034044c7e8857d5add7).

# --hints--

A conexão do banco de dados deve estar presente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /Connected to Database/gi,
        'You successfully connected to the database!'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

A desserialização agora deve estar usando corretamente o banco de dados e `done(null, null)` deve ser chamado com o `doc`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /null,\s*doc/gi,
        'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
