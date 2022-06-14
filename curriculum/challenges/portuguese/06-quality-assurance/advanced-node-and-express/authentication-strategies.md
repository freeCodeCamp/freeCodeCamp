---
id: 5895f70df9fc0f352b528e68
title: Usar estratégias de autenticação
challengeType: 2
forumTopicId: 301547
dashedName: authentication-strategies
---

# --description--

Uma estratégia é uma maneira de autenticar um usuário. Você pode usar uma estratégia para permitir que os usuários se autentiquem com base em informações salvas localmente (se você os tem registrados primeiro) ou em uma variedade de provedores, como o Google ou o GitHub. Para este projeto, usaremos o middleware chamado Passaport. O Passaport fornece um conjunto abrangente de estratégias que suportam a autenticação usando um nome de usuário e senha, GitHub, Google e muito mais.

Adicione `passport-local@~1.0.0` como uma dependência e adicione-a ao seu servidor da seguinte forma: `const LocalStrategy = require('passport-local');`

Agora, você precisará dizer ao passport para **usar** um objeto LocalStrategy instanciado com algumas configurações definidas. Certifique-se de que isso (assim como tudo a partir desse ponto) esteja encapsulado na conexão do banco de dados, já que isso depende dela!

```js
passport.use(new LocalStrategy(
  function(username, password, done) {
    myDataBase.findOne({ username: username }, function (err, user) {
      console.log('User '+ username +' attempted to log in.');
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

Isso está definindo o processo a ser usado quando tentamos autenticar alguém localmente. Primeiro, há a tentativa de encontrar um usuário em nosso banco de dados com o nome de usuário inserido. Depois, verifica-se a senha correspondente e, em seguida, por fim, se nenhum erro tiver aparecido durante a verificação, como uma senha incorreta, o objeto `user` é retornado e autenticado.

Muitas estratégias são configuradas usando definições diferentes, mas geralmente é fácil fazer a configuração com base no README do repositório da estratégia. Um bom exemplo disso é a estratégia do GitHub, onde não precisamos nos preocupar com um nome de usuário ou senha, porque o usuário será enviado para a página de autenticação do GitHub para ser autenticado. Desde que estejam logados e que concordem com isso, o GitHub retorna seu perfil para que o vejamos.

Na próxima etapa, vamos configurar como chamar realmente a estratégia de autenticação para validar um usuário com base nos dados do formulário!

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/53b495c02b92adeee0aa1bd3f3be8a4b).

# --hints--

Passport-local deve ser uma dependência.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-local',
        'Your project should list "passport-local " as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Passport-local deve ser solicitado e configurado corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-local("|')/gi,
        'You should have required passport-local'
      );
      assert.match(
        data,
        /new LocalStrategy/gi,
        'You should have told passport to use a new strategy'
      );
      assert.match(
        data,
        /findOne/gi,
        'Your new local strategy should use the findOne query to find a username based on the inputs'
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
