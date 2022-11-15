---
id: 5895f70cf9fc0f352b528e65
title: Configurar o Passport
challengeType: 2
forumTopicId: 301565
dashedName: set-up-passport
---

# --description--

É hora de configurar o *Passport* para que você possa finalmente começar a permitir que um usuário se registre ou faça o login em uma conta. Além do Passport, você usará Express-session para tratar das sessões. Express-session tem dezenas de recursos avançados que você pode usar, mas, no momento, você o usará apenas para o básico. Usar este middleware salva o id da sessão como um cookie no client e nos permite acessar os dados da sessão usando esse id no servidor. Desta forma, você manterá as informações da conta pessoal fora do cookie usado pelo client para informar ao servidor que os clients estão autenticados e, simplesmente, manter a *chave* para acessar os dados armazenados no servidor.

`passport@~0.4.1` e `express-session@~1.17.1` já estão instalados e listados como dependências no arquivo `package.json`.

Você precisará configurar as definições de sessão e inicializar o Passport. Primeiro, crie as variáveis `session` e `passport` para exigir `express-session` e `passport`, respectivamente.

Em seguida, configure a aplicação do Express para que use o session, definindo as seguintes opções:

```javascript
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
```

Certifique-se de adicionar `SESSION_SECRET` ao arquivo `.env` e de dar a ele um valor aleatório. Isto é usado para calcular o hash usado para criptografar seu cookie!

Depois de fazer tudo isso, informe ao aplicativo do express para que **use** `passport.initialize()` e `passport.session()`.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#set-up-passport-3" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

O Passport e o Express-session devem ser dependências.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
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
}
```

As dependências devem ser solicitados corretamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport("|')/,
    'You should have required passport'
  );
  assert.match(
    data,
    /require.*("|')express-session("|')/,
    'You should have required express-session'
  );
}
```

A aplicação do Express deve usar novas dependências.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(data, /passport\.initialize/, 'Your express app should use "passport.initialize()"');
  assert.match(data, /passport\.session/, 'Your express app should use "passport.session()"');
}
```

Session e session secret devem estar definidos corretamente.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /secret *:\s*process\.env(\.SESSION_SECRET|\[(?<q>"|')SESSION_SECRET\k<q>\])/,
    'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET'
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
