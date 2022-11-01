---
id: 589a69f5f9fc0f352b528e70
title: Implementar a autenticação social
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

O caminho básico que este tipo de autenticação vai seguir em sua aplicação é:

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  A rota chama `passport.authenticate('github')`, que os redireciona para o GitHub.
3.  A página que o usuário entra no GitHub permite que ele faça o login, se ainda não o fez. It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  Agora que o usuário está autenticado. O aplicativo deve verificar se é um perfil que está retornando ou salvá-lo no banco de dados, se não for o caso.

As estratégias com OAuth exigem que você tenha, pelo menos, um *ID de client* e um *segredo de client*, que é uma maneira de o serviço verificar de quem está vindo o pedido de autenticação e se ele é válido. Estes são obtidos do site com o qual você está tentando implementar a autenticação, como o GitHub, e são exclusivos do seu aplicativo. **ELES NÃO DEVEM SER COMPARTILHADOS** e nunca devem ser enviados para um repositório público ou escritos diretamente no código. Uma prática comum é colocá-los no seu arquivo `.env` e referenciá-los assim: `process.env.GITHUB_CLIENT_ID`. For this challenge you are going to use the GitHub strategy.

Follow these instructions to obtain your *Client ID and Secret* from GitHub. Go to your GitHub profile settings and click 'developer settings', then <a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer nofollow">'OAuth Apps'</a>. Click 'New OAuth App', then give your app a name, paste in the URL to your Replit homepage (**Not the project code's url**) and, for the callback URL, paste in the same URL as the homepage but add `/auth/github/callback` to the end of it. This is where users will be redirected after authenticating on GitHub. After you do all that, click 'Register application'.

On the next page, click 'Generate a new client secret' to create a new client secret. Save the client ID and your client secret in your project's `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

In your `routes.js` file, add `showSocialAuth: true` to the homepage route, after `showRegistration: true`. Now, create 2 routes accepting GET requests: `/auth/github` and `/auth/github/callback`. The first should only call passport to authenticate `'github'`. The second should call passport to authenticate `'github'` with a failure redirect to `/`, and then if that is successful redirect to `/profile` (similar to your last project).

An example of how `/auth/github/callback` should look is similar to how you handled a normal login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#implementation-of-social-authentication-3" target="_blank" rel="noopener noreferrer nofollow">check out the project up to this point</a>.

# --hints--

Route `/auth/github` should be correct.

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

Route `/auth/github/callback` should be correct.

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
