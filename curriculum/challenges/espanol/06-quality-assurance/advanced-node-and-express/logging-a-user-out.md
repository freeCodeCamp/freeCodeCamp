---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

Creating the logout logic is easy. The route should just unauthenticate the user and redirect to the home page instead of rendering any view.

In passport, unauthenticating a user is as easy as just calling `req.logout();` before redirecting.

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

You may have noticed that we're not handling missing pages (404). The common way to handle this in Node is with the following middleware. Go ahead and add this in after all your other routes:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b).

# --hints--

`req.Logout` should be called in your `/logout` route.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

Logout should redirect to the home page.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
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
