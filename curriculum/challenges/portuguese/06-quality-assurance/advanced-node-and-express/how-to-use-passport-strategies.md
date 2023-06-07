---
id: 5895f70df9fc0f352b528e69
title: Usar as estratégias do Passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

No arquivo `index.pug` fornecido, existe um formulário de login. Ele está escondido por causa do JavaScript integrado `if showLogin` com o formulário indentado depois disso.

No `res.render` daquela página, adicione uma nova variável para o objeto `showLogin: true`. Ao atualizar sua página, você deverá ver o formulário! Este formulário está configurado para **POST** em `/login`. Portanto, é aqui que você deve configurar para aceitar a solicitação de POST e autenticar o usuário.

Para este desafio, você deve adicionar a rota `/login` para aceitar uma solicitação de POST. Para autenticar nessa rota, você precisa adicionar um middleware que faça isso antes de enviar uma resposta. Isso é feito simplesmente passando outro argumento com o middleware antes e com sua resposta. O middleware a ser usado é o `passport.authenticate('local')`.

`passport.authenticate` também pode aceitar algumas opções como argumento, como `{ failureRedirect: '/' }`, que é incrivelmente útil. Não se esqueça de acrescentá-lo também. Adicione uma resposta após usar o middleware (que só será chamado se o middleware de autenticação passar) que redireciona o usuário para `/profile`. Adicione essa rota, também, e faça com que renderize a view `profile.pug`.

Se a autenticação for bem-sucedida, o objeto do usuário será salvo em `req.user`.

Neste ponto, se você digitar um nome de usuário e uma senha no formulário, ele deve redirecionar para a página inicial `/`. O console do servidor deve exibir `'User {USERNAME} attempted to log in.'`, já que, no momento, não podemos fazer login com um usuário que não está registrado.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

Todas as etapas devem ser corretamente implementadas no `server.js`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
}
```

Uma solicitação POST para `/login` deve redirecionar corretamente para `/`.

```js
async (getUserInput) => {
  const url = new URL("/login", getUserInput("url"));
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
