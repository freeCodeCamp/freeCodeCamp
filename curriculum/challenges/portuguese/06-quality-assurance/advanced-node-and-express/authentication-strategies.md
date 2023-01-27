---
id: 5895f70df9fc0f352b528e68
title: Usar estratégias de autenticação
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Uma estratégia é uma maneira de autenticar um usuário. Você pode usar uma estratégia para permitir que os usuários se autentiquem com base em informações salvas localmente (se você os tem registrados primeiro) ou em uma variedade de provedores, como o Google ou o GitHub. Para este projeto, usaremos o middleware chamado Passaport. O Passaport fornece um conjunto abrangente de estratégias que suportam a autenticação usando um nome de usuário e senha, GitHub, Google e muito mais.

`passport-local@~1.0.0` já foi adicionado como uma dependência. Adicione-o ao servidor da seguinte forma:

```javascript
const LocalStrategy = require('passport-local');
```

Diga ao passport para **usar** um objeto `LocalStrategy` instanciado com algumas configurações definidas. Certifique-se de que isso (assim como tudo a partir desse ponto) esteja encapsulado na conexão do banco de dados, já que isso depende dela!:

```javascript
passport.use(new LocalStrategy((username, password, done) => {
  myDataBase.findOne({ username: username }, (err, user) => {
    console.log(`User ${username} attempted to log in.`);
    if (err) return done(err);
    if (!user) return done(null, false);
    if (password !== user.password) return done(null, false);
    return done(null, user);
  });
}));
```

Isso está definindo o processo a ser usado ao tentar autenticar alguém localmente. Primeiro, ele tenta encontrar um usuário no seu banco de dados com o nome de usuário inserido. Então, ele verifica se a senha tem correspondência. Por fim, se nenhum erro que você verificou tiver sido exibido (por exemplo, uma senha incorreta), o objeto `user` é retornado e o usuário é autenticado.

Muitas estratégias são criadas usando configurações diferentes. Em geral, é fácil configurá-las com base no README no repositório da estratégia. Um bom exemplo disso é a estratégia do GitHub, onde não é preciso se preocupar com um nome de usuário ou senha, porque o usuário será enviado para a página de autenticação do GitHub para ser autenticado. Desde que estejam logados e que concordem com isso, o GitHub retorna seu perfil para que se possa vê-lo.

Na próxima etapa, você vai configurar como chamar realmente a estratégia de autenticação para validar um usuário com base nos dados do formulário.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#authentication-strategies-6" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

Passport-local deve ser uma dependência.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-local',
    'Your project should list "passport-local " as a dependency'
  );
}
```

Passport-local deve ser solicitado e configurado corretamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-local("|')/,
    'You should have required passport-local'
  );
  assert.match(
    data,
    /new LocalStrategy/,
    'You should have told passport to use a new strategy'
  );
  assert.match(
    data,
    /findOne/,
    'Your new local strategy should use the findOne query to find a username based on the inputs'
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
