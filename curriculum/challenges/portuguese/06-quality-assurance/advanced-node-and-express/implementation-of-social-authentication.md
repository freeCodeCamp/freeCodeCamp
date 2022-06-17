---
id: 589a69f5f9fc0f352b528e70
title: Implementar a autenticação social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

O caminho básico que este tipo de autenticação vai seguir em sua aplicação é:

1.  O usuário clica em um botão ou link que o envia para nossa rota de autenticação que usa uma estratégia específica (por exemplo, o GitHub).
2.  A rota chama `passport.authenticate('github')`, que os redireciona para o GitHub.
3.  A página que o usuário entra no GitHub permite que ele faça o login, se ainda não o fez. Em seguida, ela pede que eles aprovem o acesso ao seu perfil a partir de nossa aplicação.
4.  O usuário é então retornado para a nossa aplicação em um url específico de callback com seu perfil, se ele for aprovado.
5.  Agora que o usuário está autenticado. O aplicativo deve verificar se é um perfil que está retornando ou salvá-lo no banco de dados, se não for o caso.

As estratégias com OAuth exigem que você tenha, pelo menos, um *ID de client* e um *segredo de client*, que é uma maneira de o serviço verificar de quem está vindo o pedido de autenticação e se ele é válido. Estes são obtidos do site com o qual você está tentando implementar a autenticação, como o GitHub, e são exclusivos do seu aplicativo. **ELES NÃO DEVEM SER COMPARTILHADOS** e nunca devem ser enviados para um repositório público ou escritos diretamente no código. Uma prática comum é colocá-los no seu arquivo `.env` e referenciá-los assim: `process.env.GITHUB_CLIENT_ID`. Para este desafio, vamos usar a estratégia do GitHub.

Obter seu *ID e segredo de client* do GitHub é feito nas configurações do perfil da conta, em 'Configurações do desenvolvedor'. Em seguida, '<a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'Aplicações OAuth'</a>. Clique em 'Registrar uma nova aplicação', nomeie sua aplicação, cole o url da sua página inicial do Replit (**não o url do código do projeto**) e, finalmente, para o url de callback, cole o mesmo url da página inicial, mas com `/auth/github/callback` adicionado. É para cá que os usuários serão redirecionados para que possamos fazer o tratamento das informações após a autenticação no GitHub. Salve as informações retornadas como `'GITHUB_CLIENT_ID'` e `'GITHUB_CLIENT_SECRET'` no arquivo `.env`.

No seu arquivo `routes.js`, adicione `showSocialAuth: true` à rota da página inicial, após `showRegistration: true`. Agora, crie 2 rotas aceitando solicitações de GET: `/auth/github` e `/auth/github/callback`. O primeiro deve apenas chamar o Passport para autenticar o `'github'`. O segundo deve chamar o Passport para autenticar o `'github'` com um redirecionamento de falha para `/`. Então, se tiver sucesso, redirecionar para o `/profile` (semelhante ao nosso último projeto).

Um exemplo de como `/auth/github/callback` deve parecer é semelhante a como nós manipulamos um login normal:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```
Envie sua página quando você achar que ela está certa. Se você encontrar erros, pode conferir o projeto até este momento em <a href="" target="_blank" rel="noopener noreferrer nofollow">https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e).

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
