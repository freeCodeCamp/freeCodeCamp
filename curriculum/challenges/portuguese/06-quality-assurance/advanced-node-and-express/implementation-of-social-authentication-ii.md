---
id: 589a69f5f9fc0f352b528e71
title: Implementar a autenticação social II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

A última parte da configuração da autenticação no GitHub é criar a própria estratégia. `passport-github@~1.1.0` já foi instalado como dependência, então solicite-o no arquivo `auth.js` como `GithubStrategy` assim: `const GitHubStrategy = require('passport-github').Strategy;`. Não se esqueça de solicitar e configurar o `dotenv` para usar as variáveis de ambiente.

Para configurar a estratégia do GitHub, você precisa dizer ao Passport para usar uma `GitHubStrategy` instanciada, que aceite 2 argumentos: um objeto (contendo `clientID`, `clientSecret` e `callbackURL`) e uma função a ser chamada quando um usuário é autenticado com sucesso, que determinará se o usuário é novo e quais campos salvar inicialmente no objeto do banco de dados do usuário. Isto é comum em muitas estratégias, mas algumas podem exigir mais informações, conforme descrito no README do GitHub da estratégia específica. Por exemplo, O Google também requer um *scope*, o qual determina que tipo de informação a solicitação está pedindo que seja devolvida e pede ao usuário que aprove esse acesso.

A estratégia atual que você está implementando autentica os usuários usando uma conta do GitHub e tokens OAuth 2.0. O ID do cliente e o segredo obtidos ao criar um aplicativo são fornecidos como opções ao criar a estratégia. A estratégia também requer uma função de callback `verify`, que recebe o token de acesso e o token de atualização opcional, bem como a função `profile`, que contém o perfil do usuário autenticado no GitHub. A função de callback `verify` deve chamar `cb` fornecendo um usuário para concluir a autenticação.

Saiba como a nova estratégia deve se parecer nesse momento:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing your user object
  }
));
```

A autenticação ainda não será bem-sucedida e realmente lançará um erro sem a lógica e a função de callback do banco de dados, mas ela deverá fazer o login com o seu perfil do GitHub no console se você tentar!

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-ii-4" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

A dependência do passport-github deve ser adicionada.

```js
async (getUserInput) => {
  const url = new URL("/_api/package.json", getUserInput("url"));
  const res = await fetch(url);
  const packJson = await res.json();
  assert.property(
    packJson.dependencies,
    'passport-github',
    'Your project should list "passport-github" as a dependency'
  );
}
```

O passport-github deve ser solicitado.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /require.*("|')passport-github("|')/gi,
    'You should have required passport-github'
  );
}
```

A estratégia do GitHub deve estar configurada corretamente até aqui.

```js
async (getUserInput) => {
  const url = new URL("/_api/auth.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /passport\.use.*new GitHubStrategy/gis,
    'Passport should use a new GitHubStrategy'
  );
  assert.match(
    data,
    /callbackURL:\s*("|').*("|')/gi,
    'You should have a callbackURL'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_SECRET'
  );
  assert.match(
    data,
    /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
    'You should use process.env.GITHUB_CLIENT_ID'
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
