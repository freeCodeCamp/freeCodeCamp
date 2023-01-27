---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

The basic path this kind of authentication will follow in your app is:

1.  User clicks a button or link sending them to your route to authenticate using a specific strategy (e.g. GitHub).
2.  Your route calls `passport.authenticate('github')` which redirects them to GitHub.
3.  The page the user lands on, on GitHub, allows them to login if they aren't already. It then asks them to approve access to their profile from your app.
4.  The user is then returned to your app at a specific callback url with their profile if they are approved.
5.  They are now authenticated, and your app should check if it is a returning profile, or save it in your database if it is not.

Strategies with OAuth require you to have at least a *Client ID* and a *Client Secret* which is a way for the service to verify who the authentication request is coming from and if it is valid. These are obtained from the site you are trying to implement authentication with, such as GitHub, and are unique to your app--**THEY ARE NOT TO BE SHARED** and should never be uploaded to a public repository or written directly in your code. A common practice is to put them in your `.env` file and reference them like so: `process.env.GITHUB_CLIENT_ID`. For this challenge you are going to use the GitHub strategy.

Follow <a href="https://www.freecodecamp.org/news/how-to-set-up-a-github-oauth-application/" target="_blank" rel="noopener noreferrer nofollow">these instructions</a> to obtain your *Client ID and Secret* from GitHub. Set the homepage URL to your Replit homepage (**not the project code's URL**), and set the callback URL to the same homepage URL with `/auth/github/callback` appended to the end. Save the client ID and your client secret in your project's `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`.

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
