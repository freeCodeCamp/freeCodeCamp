---
id: 5895f70cf9fc0f352b528e65
title: Configurar o Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

É hora de configurar o *Passport* para que possamos finalmente começar a permitir que um usuário se registre ou faça o login em uma conta! Além do Passport, usaremos Express-session para tratar das sessões. Express-session tem dezenas de recursos avançados que você pode usar, mas, no momento, vamos usá-lo apenas para o básico! Usar este middleware salva o id da sessão como um cookie no client e nos permite acessar os dados da sessão usando esse id no servidor. Desta forma, mantemos as informações da conta pessoal fora do cookie usado pelo client para verificar para o servidor que o usuário está autenticado e, simplesmente, manter a *chave* para acessar os dados armazenados no servidor.

`passport@~0.4.1` e `express-session@~1.17.1` já estão instalados e listados como dependências no arquivo `package.json`.

Você precisará configurar as definições de sessão agora e inicializar o Passport. Certifique-se de primeiro criar as variáveis "session" e "passport" para exigir "express-session" e "passport", respectivamente.

Para configurar a aplicação com Express para que use o session, definiremos apenas algumas opções básicas. Certifique-se de adicionar 'SESSION_SECRET' ao seu arquivo .env e de dar a ele um valor aleatório. Isto é usado para calcular o hash usado para criptografar seu cookie!

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Você também pode dizer à aplicação do Express para **usar** 'passport.initialize()' e 'passport.session()'. (Por exemplo, `app.use(passport.initialize());`)

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://gist.github.com/camperbot/4068a7662a2f9f5d5011074397d6788c" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

O Passport e o Express-session devem ser dependências.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport',
        'Your project should list "passport" as a dependency'
      );
      assert.property(
        packJson.dependencies,
        'express-session',
        'Your project should list "express-session" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

As dependências devem ser solicitados corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport("|')/gi,
        'You should have required passport'
      );
      assert.match(
        data,
        /require.*("|')express-session("|')/gi,
        'You should have required express-session'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

A aplicação do Express deve usar novas dependências.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /passport.initialize/gi,
        'Your express app should use "passport.initialize()"'
      );
      assert.match(
        data,
        /passport.session/gi,
        'Your express app should use "passport.session()"'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Session e session secret devem estar definidos corretamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /secret *: *process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/g,
        'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
