---
id: 589a69f5f9fc0f352b528e70
title: Implementar a autenticação social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

O caminho básico que este tipo de autenticação vai seguir em sua aplicação é:

1.  O usuário clica em um botão ou link que o envia para a rota de autenticação que usa uma estratégia específica (por exemplo, o GitHub).
2.  A rota chama `passport.authenticate('github')`, que os redireciona para o GitHub.
3.  A página que o usuário entra no GitHub permite que ele faça o login, se ainda não o fez. Em seguida, ela pede que eles aprovem o acesso ao seu perfil a partir da aplicação.
4.  O usuário é então retornado para a aplicação em um url específico de callback com seu perfil, se ele for aprovado.
5.  Agora que o usuário está autenticado. O aplicativo deve verificar se é um perfil que está retornando ou salvá-lo no banco de dados, se não for o caso.

As estratégias com OAuth exigem que você tenha, pelo menos, um *ID de client* e um *segredo de client*, que é uma maneira de o serviço verificar de quem está vindo o pedido de autenticação e se ele é válido. Estes são obtidos do site com o qual você está tentando implementar a autenticação, como o GitHub, e são exclusivos do seu aplicativo. **ELES NÃO DEVEM SER COMPARTILHADOS** e nunca devem ser enviados para um repositório público ou escritos diretamente no código. Uma prática comum é colocá-los no seu arquivo `.env` e referenciá-los assim: `process.env.GITHUB_CLIENT_ID`. Para este desafio, use a estratégia do GitHub.

Siga <a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">estas instruções</a> para obter seu *Client ID e Segredo* no GitHub. Defina o URL de sua página inicial como a página inicial do Replit (**não o URL do código do projeto**) e defina o URL de callback como o mesmo URL da página inicial com `/auth/github/callback` anexado ao final. Salve o ID do client e seu segredo de client no arquivo `.env` do projeto como `GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET`.

No seu arquivo `routes.js`, adicione `showSocialAuth: true` à rota da página inicial, após `showRegistration: true`. Agora, crie 2 rotas aceitando solicitações de GET: `/auth/github` e `/auth/github/callback`. O primeiro deve apenas chamar o Passport para autenticar o `'github'`. O segundo deve chamar o Passport para autenticar o `'github'` com um redirecionamento de falha para `/`. Então, se tiver sucesso, redirecionar para o `/profile` (semelhante ao último projeto).

Um exemplo de como `/auth/github/callback` deve parecer é semelhante a como manipulamos um login normal:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Envie sua página quando você achar que ela está certa. Se você estiver encontrando erros, pode <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">conferir o projeto até este ponto</a>.

# --hints--

A rota `/auth/github` deve estar correta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

A rota `/auth/github/callback` deve estar correta.

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
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
