---
id: 5895f70df9fc0f352b528e69
title: Usar as estratégias do Passport
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

No arquivo `index.pug` fornecido, existe, na verdade, um formulário de login. Ele foi escondido antes por causa do JavaScript integrado `if showLogin` com o formulário indentado depois disso. Anteriormente, `showLogin` nunca foi definido como uma variável. Por isso, o bloco de código contendo o formulário nunca foi renderizado. No `res.render` daquela página, adicione uma nova variável para o objeto `showLogin: true`. Ao atualizar sua página, você deverá ver o formulário! Este formulário está configurado para o método **POST** em `/login`. Então, é aqui que devemos configurar para aceitar a solicitação de POST e autenticar o usuário.

Para este desafio, você deve adicionar a rota `/login` para aceitar uma solicitação de POST. Para autenticar nessa rota, você precisa adicionar um middleware que faça isso antes de enviar uma resposta. Isso é feito simplesmente passando outro argumento com o middleware antes de sua `function(req,res)` com sua resposta! O middleware a ser usado é o `passport.authenticate('local')`.

`passport.authenticate` também pode aceitar algumas opções como argumento, como: `{ failureRedirect: '/' }`, que é incrivelmente útil. Não se esqueça de acrescentá-lo também. A resposta depois de usar o middleware (que somente será chamado se o middleware de autenticação passar) deve ser redirecionar o usuário para `/profile`. Essa rota deve renderizar a visualização `profile.pug`.

Se a autenticação for bem-sucedida, o objeto do usuário será salvo em `req.user`.

Neste ponto, se você digitar um nome de usuário e uma senha no formulário, ele deve redirecionar para a página inicial `/`. O console do servidor deve exibir `'User {USERNAME} attempted to log in.'`, já que, no momento, não podemos fazer login com um usuário que não está registrado.

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

Todas as etapas devem ser corretamente implementadas no server.js.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showLogin:( |)true/gi,
        'You should be passing the variable "showLogin" as true to your render function for the homepage'
      );
      assert.match(
        data,
        /failureRedirect:( |)('|")\/('|")/gi,
        'Your code should include a failureRedirect to the "/" route'
      );
      assert.match(
        data,
        /login[^]*post[^]*local/gi,
        'You should have a route for login which accepts a POST and passport.authenticates local'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Uma solicitação de POST para /login deve redirecionar corretamente para /.

```js
(getUserInput) =>
  $.post(getUserInput('url') + '/login').then(
    (data) => {
      assert.match(
        data,
        /Looks like this page is being rendered from Pug into HTML!/gi,
        'A login attempt at this point should redirect to the homepage since we do not have any registered users'
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
