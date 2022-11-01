---
id: 589a69f5f9fc0f352b528e70
title: Реалізація соціальної автентифікації
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

Основний шлях автентифікації відстежуватиметься у вашому застосунку:

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  Ваш маршрут `passport.authenticate('github')` перенаправляє їх на GitHub.
3.  Сторінка, на яку користувач заходить, на GitHub, дозволяє йому увійти в систему, якщо він ще не зробив це. It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  Тепер вони аутентифіковані, і ваш застосунок перевірить, чи це постійний профіль, або збереже його у вашій базі даних, якщо це не так.

Стратегії з OAuth потребують, щоб ви мали принаймні *Client ID* та *Client Secret*, так сервіс перевірить, від кого надходить запит автентифікації та чи є він дійсним. Вони отримані з сайту, з яким ви намагаєтеся здійснити автентифікацію, наприклад, з сайту GitHub і вони є унікальними для вашого застосунку **ВОНИ НЕ Є ДЛЯ ЗАГАЛЬНОГО ДОСТУПУ** і ніколи не повинні бути завантажені в публічне сховище або написані безпосередньо у вашому коді. Поширеною практикою є розміщення їх у файлі `.env` і посилання на них таким чином: `process.env.GITHUB_CLIENT_ID`. For this challenge you are going to use the GitHub strategy.

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
