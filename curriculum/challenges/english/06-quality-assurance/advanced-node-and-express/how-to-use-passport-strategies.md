---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

In the `index.pug` file supplied, there is a login form. It is hidden because of the inline JavaScript `if showLogin` with the form indented after it.

In the `res.render` for that page, add a new variable to the object, `showLogin: true`. When you refresh your page, you should then see the form! This form is set up to **POST** on `/login`. So, this is where you should set up to accept the POST request and authenticate the user.

For this challenge, you should add the route `/login` to accept a POST request. To authenticate on this route, you need to add a middleware to do so before then sending a response. This is done by just passing another argument with the middleware before with your response. The middleware to use is `passport.authenticate('local')`.

`passport.authenticate` can also take some options as an argument such as `{ failureRedirect: '/' }` which is incredibly useful, so be sure to add that in as well. Add a response after using the middleware (which will only be called if the authentication middleware passes) that redirects the user to `/profile`. Add that route, as well, and make it render the view `profile.pug`.

If the authentication was successful, the user object will be saved in `req.user`.

At this point, if you enter a username and password in the form, it should redirect to the home page `/`, and the console of your server should display `'User {USERNAME} attempted to log in.'`, since we currently cannot login a user who isn't registered.

Submit your page when you think you've got it right. If you're running into errors, you can <a href="https://forum.freecodecamp.org/t/advanced-node-and-express/567135#how-to-use-passport-strategies-7" target="_blank" rel="noopener noreferrer nofollow">check out the project completed up to this point</a>.

# --hints--

All steps should be correctly implemented in `server.js`.

```js
  const url = new URL("/_api/server.js", code);
  const res = await fetch(url);
  const data = await res.text();
  assert.match(
    data,
    /showLogin:( |)true/,
    'You should be passing the variable "showLogin" as true to your render function for the homepage'
  );
  assert.match(
    data,
    /failureRedirect:( |)('|")\/('|")/,
    'Your code should include a failureRedirect to the "/" route'
  );
  assert.match(
    data,
    /login[^]*post[^]*local/,
    'You should have a route for login which accepts a POST and passport.authenticates local'
  );
```

A POST request to `/login` should correctly redirect to `/`.

```js
  const url = new URL("/login", code);
  const res = await fetch(url, { method: 'POST' });
  const data = await res.text();
  assert.match(
    data,
    /Looks like this page is being rendered from Pug into HTML!/,
    'A login attempt at this point should redirect to the homepage since we do not have any registered users'
  );
```

