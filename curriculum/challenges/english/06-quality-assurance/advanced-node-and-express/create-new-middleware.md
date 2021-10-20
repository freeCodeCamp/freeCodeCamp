---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

As is, any user can just go to `/profile` whether they have authenticated or not, by typing in the url. We want to prevent this, by checking if the user is authenticated first before rendering the profile page. This is the perfect example of when to create a middleware.

The challenge here is creating the middleware function `ensureAuthenticated(req, res, next)`, which will check if a user is authenticated by calling passport's `isAuthenticated` method on the `request` which, in turn, checks if `req.user` is defined. If it is, then `next()` should be called, otherwise, we can just respond to the request with a redirect to our homepage to login. An implementation of this middleware is:

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

Now add *ensureAuthenticated* as a middleware to the request for the profile page before the argument to the get request containing the function that renders the page.

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point [here](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959).

# --hints--

Middleware ensureAuthenticated should be implemented and on our /profile route.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

A Get request to /profile should correctly redirect to / since we are not authenticated.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
