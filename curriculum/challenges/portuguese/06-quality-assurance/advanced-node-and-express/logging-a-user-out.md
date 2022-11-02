---
id: 58965611f9fc0f352b528e6c
title: Fazer o logout do usuário
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Criar a lógica de logout é fácil. A rota deve apenas cancelar a autenticação do usuário e redirecionar para a página inicial em vez de renderizar qualquer visualização.

No Passport, cancelar a autenticação de um usuário é fácil. Basta chamar `req.logout()` antes de redirecionar. Adicione esta rota `/logout` para fazer isso:

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

Você deve ter percebido que não está lidando com páginas ausentes (404). A maneira comum de lidar com isso no Node é com o middleware que veremos a seguir. Adicione-o isso depois de todas as suas outras rotas:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#logging-a-user-out-10" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

`req.logout()` deve ser chamado na rota `/logout`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /req.logout/gi,
    'You should be calling req.logout() in your /logout route'
  );
}
```

`/logout` deve redirecionar para a página inicial.

```js
async (getUserInput) => {
  const url = new URL("/logout", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /Home page/gi,
    'When a user logs out they should be redirected to the homepage'
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
