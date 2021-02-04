---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

The basic path this kind of authentication will follow in your app is:

1.  User clicks a button or link sending them to our route to authenticate using a specific strategy (e.g. GitHub).
2.  Your route calls `passport.authenticate('github')` which redirects them to GitHub.
3.  The page the user lands on, on GitHub, allows them to login if they aren't already. It then asks them to approve access to their profile from our app.
4.  The user is then returned to our app at a specific callback url with their profile if they are approved.
5.  They are now authenticated, and your app should check if it is a returning profile, or save it in your database if it is not.

Strategies with OAuth require you to have at least a *Client ID* and a *Client Secret* which is a way for the service to verify who the authentication request is coming from and if it is valid. These are obtained from the site you are trying to implement authentication with, such as GitHub, and are unique to your app--**THEY ARE NOT TO BE SHARED** and should never be uploaded to a public repository or written directly in your code. A common practice is to put them in your `.env` file and reference them like so: `process.env.GITHUB_CLIENT_ID`. For this challenge we're going to use the GitHub strategy.

Obtaining your *Client ID and Secret* from GitHub is done in your account profile settings under 'developer settings', then '[OAuth applications](https://github.com/settings/developers)'. Click 'Register a new application', name your app, paste in the url to your Repl.it homepage (**Not the project code's url**), and lastly, for the callback url, paste in the same url as the homepage but with `/auth/github/callback` added on. This is where users will be redirected for us to handle after authenticating on GitHub. Save the returned information as `'GITHUB_CLIENT_ID'` and `'GITHUB_CLIENT_SECRET'` in your `.env` file.

In your `routes.js` file, add `showSocialAuth: true` to the homepage route, after `showRegistration: true`. Now, create 2 routes accepting GET requests: `/auth/github` and `/auth/github/callback`. The first should only call passport to authenticate `'github'`. The second should call passport to authenticate `'github'` with a failure redirect to `/`, and then if that is successful redirect to `/profile` (similar to our last project).

An example of how `/auth/github/callback` should look is similar to how we handled a normal login:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project up to this point [here](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e).

# --hints--

Route /auth/github should be correct.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/?\1[^]*?get.*?passport.authenticate.*?github/gi,
        'Route auth/github should only call passport.authenticate with github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Route /auth/github/callback should be correct.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/routes.js').then(
    (data) => {
      assert.match(
        data.replace(/\s/g, ''),
        /('|")\/auth\/github\/callback\/?\1[^]*?get.*?passport.authenticate.*?github.*?failureRedirect:("|')\/\2/gi,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
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
