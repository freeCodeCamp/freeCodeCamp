---
id: 5895f70ef9fc0f352b528e6b
title: Compor um perfil
challengeType: 2
forumTopicId: 301554
dashedName: how-to-put-a-profile-together
---

# --description--

Agora que você pode garantir que o usuário que acessou o `/profile` está autenticado, pode usar as informações contidas no `req.user` da página.

Passe um objeto contendo a propriedade `username` e o valor `req.user.username` como o segundo argumento para o método `render` da visualização do perfil.

Em seguida, vá à visualização `profile.pug` e adicione a linha seguinte abaixo do elemento `h1` existente, no mesmo nível de indentação:

```pug
h2.center#welcome Welcome, #{username}!
```

Isso criará um elemento `h2` com a classe `center` e com o id `welcome`, contendo o texto `Welcome,` seguido do nome de usuário.

Além disso, em `profile.pug`, adicione um link referindo-se à rota `/logout`, que hospedará a lógica para cancelar a autenticação de um usuário:

```pug
a(href='/logout') Logout
```

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-put-a-profile-together-9" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto concluído até este ponto</a>.

# --hints--

Você deve adicionar corretamente uma variável de renderização do Pug em `/profile`.

```js
async (getUserInput) => {
  const url = new URL("/_api/server.js", getUserInput("url"));
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /username:( |)req.user.username/,
    'You should be passing the variable username with req.user.username into the render function of the profile page'
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
