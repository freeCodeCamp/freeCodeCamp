---
id: 5895f70df9fc0f352b528e6a
title: Criar um novo middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

Da forma como está no momento, qualquer usuário pode ir até `/profile`, já tendo sido autenticado ou não, digitando o url. Queremos evitar isso verificando se o usuário está autenticado primeiro antes de renderizar a página de perfil. Este é o exemplo perfeito de quando criar um middleware.

O desafio aqui é cria a função do middleware `ensureAuthenticated(req, res, next)`, que vai verificar se um usuário está autenticado chamando o método `isAuthenticated` do Passport na `request` (solicitação), que, por sua vez, verificará se `req.user` está definido. Se estiver, `next()` deverá ser chamado. Caso contrário, basta responder ao pedido com um redirecionamento à nossa página inicial para fazer o login. Uma implementação deste middleware é:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Agora, adicione *ensureAuthenticated* como um middleware para a página de perfil antes do argumento para a solicitação de GET que contém a função que renderiza a página.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto concluído até este momento [aqui](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959).

# --hints--

O middleware ensureAuthenticated deve estar implementado e em nossa rota /profile.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Uma solicitação de GET para /profile deve redirecionar corretamente para /, já que não estamos autenticados.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
