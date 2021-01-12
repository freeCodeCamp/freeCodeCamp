---
id: 5895f70df9fc0f352b528e69
title: How to Use Passport Strategies
challengeType: 2
forumTopicId: 301555
dashedName: how-to-use-passport-strategies
---

# --description--

In the `index.pug` file supplied, there is actually a login form. It has previously been hidden because of the inline JavaScript `if showLogin` with the form indented after it. Before `showLogin` as a variable was never defined, so it never rendered the code block containing the form. Go ahead and on the `res.render` for that page add a new variable to the object `showLogin: true`. When you refresh your page, you should then see the form! This form is set up to **POST** on `/login`, so this is where we should set up to accept the POST and authenticate the user.

For this challenge you should add the route `/login` to accept a POST request. To authenticate on this route, you need to add a middleware to do so before then sending a response. This is done by just passing another argument with the middleware before your `function(req,res)` with your response! The middleware to use is `passport.authenticate('local')`.

`passport.authenticate` can also take some options as an argument such as: `{ failureRedirect: '/' }` which is incredibly useful, so be sure to add that in as well. The response after using the middleware (which will only be called if the authentication middleware passes) should be to redirect the user to `/profile` and that route should render the view `profile.pug`.

If the authentication was successful, the user object will be saved in `req.user`.

At this point, if you enter a username and password in the form, it should redirect to the home page `/`, and the console of your server should display `'User {USERNAME} attempted to log in.'`, since we currently cannot login a user who isn't registered.

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/7ad011ac54612ad53188b500c5e99cb9).

# --hints--

All steps should be correctly implemented in the server.js.

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

A POST request to /login should correctly redirect to /.

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
