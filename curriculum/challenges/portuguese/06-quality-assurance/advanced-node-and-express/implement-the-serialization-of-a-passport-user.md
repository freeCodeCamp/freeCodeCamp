---
id: 5895f70cf9fc0f352b528e67
title: Implementar a serialização de um usuário do Passport
challengeType: 2
forumTopicId: 301556
dashedName: implement-the-serialization-of-a-passport-user
---

# --description--

Você não está carregando um objeto do usuário de fato, já que o banco de dados não está configurado. Conecte-se ao banco de dados uma vez, ao iniciar o servidor e mantenha uma conexão persistente para todo o ciclo de vida do aplicativo. Para fazer isso, adicione a string de conexão do banco de dados (por exemplo: `mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority`) à variável de ambiente `MONGO_URI`. Este é usado no arquivo `connection.js`.

*Se você estiver com problemas na criação de um banco de dados gratuito no MongoDB Atlas, confira o <a href="https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/" target="_blank" rel="noopener noreferrer nofollow">tutorial</a>.*

Agora, conecte-se ao nosso banco de dados. Em seguida, vamos começar a escutar solicitações. O objetivo é não permitir solicitações antes do banco de dados estar conectado ou se houver um erro no banco de dados. Para fazer isso, englobe a serialização e as rotas da aplicação no código a seguir:

```javascript
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  // Be sure to change the title
  app.route('/').get((req, res) => {
    // Change the response to render the Pug template
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please login'
    });
  });

  // Serialization and deserialization here...

  // Be sure to add this...
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
// app.listen out here...
```

Certifique-se de descomentar o código `myDataBase` em `deserializeUser` e de editar o seu `done(null, null)` para incluir o `doc`.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implement-the-serialization-of-a-passport-user-5" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

A conexão do banco de dados deve estar presente.

```js
async (getUserInput) => {
  const url = new URL("/", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Connected to Database/gi,
    'You successfully connected to the database!'
  );
}
```

A desserialização agora deve estar usando corretamente o banco de dados e `done(null, null)` deve ser chamado com o `doc`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /null,\s*doc/gi,
    'The callback in deserializeUser of (null, null) should be altered to (null, doc)'
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
